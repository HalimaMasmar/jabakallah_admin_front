import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agent } from '../Interfaces(Modules)/Agent';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  const httpOptionsFile = {
	headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data ; boundary=---' })
  };

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private adminUrl: string;

	constructor(private http: HttpClient) {
		this.adminUrl = "https://bougra.herokuapp.com/api/auth/";
	}

  public saveAgent(

	nom:String,
	prenom:String,
	email:String,
	pieceIdentite: string,
    numPieceIdentite: string,
    dateNaissance: string,
	numTel: string,
    numMatriculation: string,
    numPattente: string,
	adresse:String,
	
	) {
		return this.http.post<Agent>(this.adminUrl + "agent/add",
		 {
			nom,
			prenom,
			email,
			pieceIdentite,
			numPieceIdentite,
			dateNaissance,
			numTel,
			numMatriculation,
			numPattente,
			adresse,
		},
		httpOptions
		);
	}


  public findAllAgents(): Observable<any[]> {
		return this.http.get<any[]>(
			"https://bougra.herokuapp.com/adminController/listAgents"
				);


}
public deleteAgent(numPieceIdentite: String): Observable<any> {
	const url = "https://bougra.herokuapp.com/adminController/Deleteagent" ;
	return this.http.post(url, numPieceIdentite, httpOptions);
  }
  

public saveAgentFile(
	file:File,
	owneruid: string,
	description:string,
	
){

	return this.http.post<any>("https://bougra.herokuapp.com/file/uploadAgentFile",{
		file,owneruid,description
	},httpOptionsFile);
}


}

