import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Output = ({myArray, onSubmit}) => {
    const [loader, setLoader] = useState(false);

    const downLoad = () => {
        const capture = document.querySelector('.output');
        setLoader(true);
        html2canvas(capture).then((canvas) => {
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPDF('p', 'mm', 'a4');
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight)
            setLoader(false);
            const clickedValue = false
            const newArray = [];
            onSubmit(clickedValue,newArray);
            doc.save(myArray[0].fullname+'.pdf');
        })
    }
    return (
        <div className="result">
        <div className="output">
            <div className="persoOutput">
                <h1>{myArray[0].fullname}</h1>
                <p>{myArray[0].email}</p>
                <p>{myArray[0].phone}</p>
                <p>{myArray[0].address}</p>
            </div>
            <div className="divider"></div>
            <div className="persoExperience">
                <p><span>Company Name:</span>{ myArray[2].companyName}</p>
                <p><span>From:</span><span></span>{myArray[2].from}</p>
                <p><span>To:</span><span></span><span></span>{ myArray[2].to}</p>
                <p><span>Responsibilities:</span>{ myArray[2].responsibilities}</p>
            </div>
            <div className="divider"></div>
            <div className="persoEducation">
                <p><span>School name:</span>{ myArray[1].schoolname}</p>
                <p><span>Title of study:</span>{ myArray[1].titleStudy}</p>
                <p><span>Date of study:</span>{ myArray[1].dateStudy}</p>
            </div>
            
        </div>
        <div className="downloadpdf"><button onClick={downLoad}>Download my cv</button></div>
        </div>
    )
}
export default Output;