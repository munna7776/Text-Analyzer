import React,{useState} from 'react'

type TextAnalyzerProps = {
    mode: string
}

export default function TextAnalyzer(props: TextAnalyzerProps) {
    const initialState = "Copy to Clipboard"
    const [text, setText] = useState<string>("Enter your text here");
    const [buttonText, setButtonText] = useState<string>(initialState);
    const handleChange=(e: React.ChangeEvent<HTMLTextAreaElement>): void=>{
        setText(e.target.value);
    }
    const handleUpperCase=(): void =>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowerCase = (): void =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleExtraSpace=(): void =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleCopyText=(): void =>{
        navigator.clipboard.writeText(text);
        setButtonText("Copied to clipboard");
        setTimeout(() => {
            setButtonText(initialState)
        }, 2000);
    }

    const handleClearText = (): void =>{
        let newText='';
        setText(newText);
    }
    return (
        <>
            <div  style={{ backgroundColor:props.mode==='light'?'white':'grey',height:'100vh'}}>
                <div className="container d-flex flex-column align-items-center">
                    <h1 className={`text-center mt-2 text-${props.mode==='light'?'dark':'light'}`}>Text Analyzer</h1>
                    <div className="mb-3">
                        <textarea className="form-control shadow-lg p-3 rounded" id="textForm" rows={8} cols={100} value={text} onChange={handleChange}
                        style={{ backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'red':'black',border:props.mode==='dark'?'2px solid black':''}}>
                            {text}
                        </textarea>
                    </div>
                    <div className="d-flex">
                        <button disabled={text.length===0} type="button" className="btn btn-primary" onClick={handleUpperCase}>Convert To UpperCase</button>
                        <button disabled={text.length===0} type="button" className="btn btn-primary mx-1" onClick={handleLowerCase}>Convert To LowerCase</button>
                        <button disabled={text.length===0} type="button" className="btn btn-primary" onClick={handleExtraSpace}>Remove Extra Space</button>   
                        <button disabled={text.length===0} type="button" className="btn btn-primary mx-1" onClick={handleCopyText}>{buttonText}</button>   
                        <button disabled={text.length===0} type="button" className="btn btn-primary" onClick={handleClearText}>Clear Text</button>  
                    </div>
                </div>
                <div className={`container mt-3 text-center text-${props.mode==='light'?'dark':'light'}`}>
                    <h2>Text Analysis</h2>
                    <p>Number of words - {text.split(/\s+/).filter((e)=>{return e.length!==0;}).length}</p>
                    <p>Number of characters - {text.length}</p>
                    <p>Reading time of text - {0.008*text.split(/\s+/).filter((e)=>{return e.length!==0;}).length}</p>
                </div>
            </div>
        </>
    )
}
