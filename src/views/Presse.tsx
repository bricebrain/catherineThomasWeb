import React, { useState, useRef } from 'react'
import Banner from '../components/Banner'
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


const listArticles = ['Article Bernard Forum des tortues',
    'Article Journal de Vanves',
    'Article Les Saisons de la danse',
    'Article LIGEIA',
    'Communiqué de Patrick Delgado',
    'Corps de tortues',
    'La tortue un corps à peindre',
    'Pierre BACCI FFEPT',
    'Soulahfate Besma',
    'Vanves 2001',
    'Version Chinoise la tortue un corps à peindre'
]

function Presse() {
    const [article, setArticle] = useState<string>('Article Bernard Forum des tortues')
    const [itemSelected, setItemSelected] = useState<number>(0)

    const scale = 0.9; // Facteur d'échelle pour agrandir l'image
    const [numPages, setNumPages] = useState<number>(0); // État pour stocker le nombre de pages

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
        console.log(`Loaded ${numPages} pages`);
    };

    const pages = []

    for (let pageIndex = 0; pageIndex < numPages; pageIndex++) {
        pages.push(
            <Page
                key={`page_${pageIndex + 1}`}
                pageNumber={pageIndex + 1}
                width={window.innerWidth * scale}
                scale={scale}
            />
        );
    }

    const selectArticle = (item: string): void => {
        setArticle(item)
    }

    return (

        <div style={{ width: '100vw', height: '100vh', justifyContent: 'center', paddingTop: 60 }}>
            <Banner title='PRESSE' />


            <div >
                <div key={crypto.randomUUID()} style={{ height: 30, display: 'flex', justifyContent: 'center', marginTop: 20 }}>


                </div>


                <div className='containerPresse'>
                    <h2> Articles</h2>
                    <br />
                    {listArticles.map((item, index) => <h3
                       style={{padding:5, textDecoration: index === itemSelected? 'underline' : 'none', cursor:'pointer'}}
                    onClick={() => {
                        selectArticle(item)
                        setItemSelected(index)

                    }
                 
                    }>{item}</h3>)}
                    <div>

                        <Document
                            file={require(`../assets/articlePdf/${article}.pdf`)}
                            onLoadSuccess={onDocumentLoadSuccess}

                        >
                            {pages}
                        </Document>
                    </div>






                </div>




            </div>




        </div>

    )
}

export default Presse

