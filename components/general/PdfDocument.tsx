import { Document, Page, pdfjs } from 'react-pdf'
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry'
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker
import Popup from 'reactjs-popup'
import PopupPdf from '@/components/popups/PopupPdf'
import SVGPaperCorner from '@/components/svgs/SVGPaperCorner'
import stls from '@/styles/modules/PdfDocument.module.sass'

const PdfDocument = ({ fileSrc, fileName, pageNum }) => {
  const pdfDocumentClasses = [stls.pdfDocument, 'pdf-document']

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
          <PopupPdf closePdfPopup={close} pdfFile={fileSrc} pageNum={pageNum} />
        )}
      </Popup>
    </Document>
  )
}

export default PdfDocument
