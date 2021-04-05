import axios from 'axios';
import '../rms_components/css_Upload.css';
import React,{Component} from 'react';

class Upload extends Component {

	state = {

		// Initially, no file is selected
		selectedFile: null
	};
	
	// On file select (from the pop up)
	onFileChange = event => {
		
		// Update the state
		this.setState({ selectedFile: event.target.files[0] });
	
	};
	
	// On file upload (click the upload button)
	onFileUpload = () => {
	
		// Create an object of formData
		const formData = new FormData();
		
		// Update the formData object
		formData.append(
			"myFile",
			this.state.selectedFile,
			this.state.selectedFile.name
		);
		
		// Details of the uploaded file
		console.log(this.state.selectedFile);
		
		// Request made to the backend api
		// Send formData object
		axios.post("api/uploadfile", formData);
	};		

	// File content to be displayed after
	// file upload is complete
	fileData = () => {	


	if (this.state.selectedFile) {
		
		return (
			<div class="reso_details">
				
				<h2 class="title">Resource Details</h2>
							
				<h4 class="detail">Resource Name: {this.state.selectedFile.name}</h4>						
				<h4 class="detail">Resource Type: {this.state.selectedFile.type}</h4>							
				<h4 class="detail">
				Last Modified:{" "}
				{this.state.selectedFile.lastModifiedDate.toDateString()}
				</h4>

			</div>
		);
	} else {
		return (
			<div class="reso_details">
				<br />
				<h4 class="title">Pick your resources and click on upload!</h4>
			</div>
		);
	}
	};
	
	render() {
		
	const khuljaasimsim = {display: this.state.selectedFile ?  'block' : 'none' };

	return (
		<div class="upload_section">
			<h3>Upload a new resource and share it with your mates!</h3>
			<div class="upload_box">
				<div>
					<input class="file_picker" type="file" onChange={this.onFileChange} title="Chose Resource to upload"/>	
				</div>
			</div>
			<div class="upload_button_section" style={khuljaasimsim}>			
				<button onClick={this.onFileUpload} class="upload_button" >
					Upload
				</button>
			</div>
			{this.fileData()}
		</div>
	);
	}
}

export default Upload;
