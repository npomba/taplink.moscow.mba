import stls from '@/styles/components/general/PdfDocument.module.sass'
import { Document, Page, pdfjs } from 'react-pdf'
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry'
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker
import Popup from 'reactjs-popup'
import PopupPdf from '@/components/popups/PopupPdf'
import SVGPaperCorner from '@/components/svgs/SVGPaperCorner'

const PdfDocument = ({ fileSrc, fileName, pageNum, landscape = false }) => {
  const pdfDocumentClasses = [stls.pdfDocument, 'pdf-document']

  if (landscape) pdfDocumentClasses.push(stls.pdfDocumentLandscape)
  else pdfDocumentClasses.push(stls.pdfDocumentPortrait)

  return (
    <Document
      className={pdfDocumentClasses.join(' ')}
      file={fileSrc}
      loading='Подождите, идет загрузка...'>
      <Popup
        trigger={
          <div className={`${stls.popupPdfTrigger} trigger`}>
            <Page className={stls.pdfPage} width={320} pageNumber={pageNum} />
            <div className={stls.pdfDocumentLinkContainer}>
              <SVGPaperCorner fill='#000' />
              <a>{fileName}</a>
            </div>
          </div>
        }
        className='pdf-popup'
        modal
        nested>
        {close => (
          <PopupPdf
            closePdfPopup={close}
            pdfFile={fileSrc}
            pageNum={pageNum}
            landscape={landscape}
          />
        )}
      </Popup>
    </Document>
  )
}

export default PdfDocument
