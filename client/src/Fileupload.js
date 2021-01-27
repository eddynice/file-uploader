import Axios from 'axios'
import React from 'react'
import { Fragment,useState } from 'react'
import Message from './Message'
import "./App.css"

export default function Fileupload() {
    const [file, setFile] = useState('')
    const [fileName, setFilename] = useState('choose file')
    const [uploadedFile, setUploadedFile] = useState({})
    const [message, setmessage] = useState('')
   const [UploadPercentage, setUploadPercentage] = useState()

    const onChange=(e)=>{
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    }

    const onSubmit= async (e)=>{
        e.preventDefault();
        const formData  = new FormData();
        formData.append("file", file);

        try{
            const res =await Axios.post('/upload', formData,{
                headers:{'Content-Type': 'multipart/form-data'

                },
                onUploadProgress:ProgressEvent=>{
                    setUploadPercentage(parseInt(Math.round((ProgressEvent.loaded * 100)/ProgressEvent.total)));
                     //clear p
                setTimeout(()=> setUploadPercentage(0), 10000)
                }
               
            });
            const {filePath, fileName} =res.data;
            setUploadedFile({fileName, filePath})
           // setmessage('File uploaded')
            console.log(filePath)
        } catch(err){
            if(err.response.status === 500){
               console.log("there was a proble with the server")
            }else{
                console.log(err.response.data.msg)
            }

        }
    }
    
    return (
        <Fragment>
            {message ? <Message msg={message}/> :null}
            <form onSubmit={onSubmit}>
                <div className="custom-file mb-4">
                    <input type="file" onChange={onChange} className=" mak custom-file-input" id="customFile"/>
                    <label className="custom-file-label" htmlFor="customFile">{fileName}</label>
                </div>
                <input type="submit" value="Upload"
                 className="btn btn-primary btn-block mt-4"/>
            </form>
            {uploadedFile ? (<div className="row mt-5">
                <div className="col-md-6 m-auto">
                     <h3 className="text-center">{uploadedFile.fileName}</h3>
                     <img style={{width:"100%"}} src={uploadedFile.filePath} alt=""/>

                </div>
            </div>
            ):null}
        </Fragment>
    )
}
