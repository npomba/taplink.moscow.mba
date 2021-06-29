import { Document, Page, pdfjs } from 'react-pdf'
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry'
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker
import Popup from 'reactjs-popup'
import PopupPdf from '@/components/popups/PopupPdf'
import SVGPaperCorner from '@/components/svgs/SVGPaperCorner'
import stls from '@/styles/modules/LegalPage.module.sass'

const PdfDocument = ({ fileSrc, fileName, pageNum }) => {
  return (
    <Document
      className={stls.pdfDocument}
      file={fileSrc}
      loading='Подождите, идет загрузка...'>
      <Popup
        trigger={
          <div className={`${stls.popupPdfTrigger} trigger`}>
            <Page
              className={`${stls.pdfPage} pdf-page`}
              width={320}
              pageNumber={pageNum}
            />
            <div className={`${stls.pdfDocumentLinkContainer} link-container`}>
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
