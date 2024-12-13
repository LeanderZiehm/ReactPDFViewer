import PdfViewerComponent from './components/PdfViewerComponent';

function App() {
	return (
		<div className="App" style={{width:"100vw"}}>
			<div className="PDF-viewer">
			<PdfViewerComponent
				document={"THD-workshop.pdf"}
			/>
			</div>
		</div>
	);
}

export default App;