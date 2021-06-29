import { Document, Page, pdfjs } from 'react-pdf'
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry'
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker
import PopupLoader from '@/components/popups/PopupLoader'
import SVGClose from '@/components/svgs/SVGClose'
import stls from '@/styles/modules/PdfDocument.module.sass'

const PopupPdf = ({ closePdfPopup, pdfFile, pageNum }) => {
  const pdfPageClasses = [stls.pdfPage, stls.pdfFullScreen]

  return (
    <div className='popup-modal popup-pdf mfp-with-anim'>
      <div className='popup-content pdf-popup-content'>
        <Document
          file={pdfFile}
          loading={() => (
            <PopupLoader closePopUp={closePdfPopup} loadingPopupContent />
          )}>
          <Page
            className={pdfPageClasses.join(' ')}
            height={800}
            pageNumber={pageNum}
          />
        </Document>
      </div>
      <button className='pdf-close' type='button' onClick={closePdfPopup}>
        <SVGClose />
      </button>
    </div>
  )
}

export default PopupPdf
