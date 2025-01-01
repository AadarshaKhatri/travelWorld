import axios from 'axios';


const app = axios.create({
  baseURL:"http://localhost:9999/api/v1/"
});

export function getData(url : string){
  return app.get(url);
}

export function postData(url:string, data:object){
  return app.post(url,data)
}


export function updateData(url:string){
  return app.put(url);
}

export function deleteData(url:string){
  return app.delete(url);
}