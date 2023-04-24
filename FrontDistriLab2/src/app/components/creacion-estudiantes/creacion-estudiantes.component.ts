import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlobServiceClient } from '@azure/storage-blob';
import { Estudiantes } from 'src/app/models/Materias';
import { EstudiantesService } from 'src/app/service/EstudiantesService';

@Component({
  selector: 'app-creacion-estudiantes',
  templateUrl: './creacion-estudiantes.component.html',
  styleUrls: ['./creacion-estudiantes.component.css']
})
export class CreacionEstudiantesComponent {
  firstNameStudent!: string;
  lastNameStudent!: string;
  typeDocument!: string;
  numDocument!: string;
  statusStudent!: string;
  genderStudent!: string;

  imageSrc!:File; // Variable para almacenar la URL de datos de la imagen
  imageUpload!:File;
  urlImage:string ="";
  token = "si=distriLab&sv=2021-12-02&sr=c&sig=rlnRXy64ZJI%2FkxIxRVTh5z2z2KGsKMk0XaRM70%2B9CnI%3D"
  loaderSpinner = false;

  onFileDrop(event: DragEvent) {
    event.preventDefault();
    const files = (event.dataTransfer as DataTransfer).files;
    this.uploadFiles(files, (file: File) => {
      this.imageUpload = file;
    });
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  uploadFiles(files: FileList, callback: (file: File) => void) {
    // Leer la imagen como una URL de datos
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageSrc = event.target.result;
    };
    reader.readAsDataURL(files[0]);
    callback(files[0]);
  }
  constructor(private estudiantesService: EstudiantesService, private router: Router) {

  }

  get CreacionEstudiantes() {
    return this.firstNameStudent && this.lastNameStudent && this.typeDocument && this.numDocument && this.statusStudent && this.genderStudent;
  }


  crearNuevoEstudiante() {
    this.loaderSpinner = true;
    var upload = this.uploadImage()
    if(!upload){
      return;
    }

    const auxEstudiante: Estudiantes = {
      codStudent: 0,
      firstNameStudent: this.firstNameStudent,
      lastNameStudent: this.lastNameStudent,
      typeDocument: this.typeDocument,
      numDocument: this.numDocument,
      statusStudent: this.statusStudent,
      genderStudent: this.genderStudent,
      pathStudent: this.urlImage
    }
    
    this.estudiantesService.crearEstudiante(auxEstudiante).subscribe(result => {
      this.loaderSpinner = false;
      alert(result)
      this.router.navigate(['estudiantes']);
    },
      error => {
        console.log(error.message)
      }
    )
  }

  async uploadImage(): Promise<boolean> {
    try {
      var connectionString:string ="https://imagesuni.blob.core.windows.net?"+this.token;
      var blobServiceClient = new BlobServiceClient(connectionString);
      const containerClient = blobServiceClient.getContainerClient("students");
      const blob = new Blob([this.imageUpload], { type: this.imageUpload.type });
      alert(this.imageUpload.name);
      const blockBlobClient = containerClient.getBlockBlobClient(this.imageUpload.name);
     
      (await blockBlobClient.upload(blob, blob.size));
      this.urlImage = blockBlobClient.url
      console.log(this.urlImage);
      console.log('La imagen se subió exitosamente.');
      return true;
    } catch (error) {
      alert("Error al subir la imgen, intentelo de nuevo más tarde")
      console.error('Se produjo un error al subir la imagen:', error);
      return false;
    }
  }
}
