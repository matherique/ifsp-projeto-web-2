import { PDFService } from '../../usecase/ports/pdf-service'
import PDFPrinter from 'pdfmake'
import { TDocumentDefinitions } from 'pdfmake/interfaces'

function getDocDefinition() {}

export class PDFMakeAdapter implements PDFService {
  private pdf: PDFPrinter
  constructor() {
    this.pdf = new PDFPrinter({
      Helvetica: {
        normal: 'Helvetica',
        bold: 'Helvetica-Bold',
        italics: 'Helvetica-Oblique',
        bolditalics: 'Helvetica-BoldOblique'
      }
    })
  }

  async generate(
    title: string,
    thead: string[],
    data: any[][]
  ): Promise<Buffer> {
    const docDefinition = this.getDocDefinition(title, thead, data)

    const doc = this.pdf.createPdfKitDocument(docDefinition)

    const chunks = []
    doc.on('data', chunk => chunks.push(chunk))
    doc.end()

    return new Promise((resolve, reject) => {
      doc.on('end', () => {
        resolve(Buffer.concat(chunks))
      })
      doc.on('error', error => {
        reject(error)
      })
    })
  }

  private getDocDefinition(
    title: string,
    header: string[],
    body: any[][]
  ): TDocumentDefinitions {
    const colNumber = body[0].length - 1
    const widths = ['auto', ...Array(colNumber).fill('*')]
    return {
      defaultStyle: { font: 'Helvetica' },
      pageOrientation: 'landscape',
      content: [
        {
          columns: [
            {
              text: title,
              style: 'headerLeft',
              width: '*'
            },
            {
              text: `Criado em: '${new Date().toLocaleString('pt-BR')}`,
              style: 'headerRight',
              width: '*'
            }
          ]
        },
        {
          table: {
            headerRows: 1,
            widths,
            body: [header.map(h => ({ text: h, style: 'thead' })), ...body]
          }
        }
      ],
      styles: {
        headerLeft: {
          bold: true,
          alignment: 'left',
          margin: [0, 0, 0, 10]
        },
        headerRight: {
          bold: true,
          alignment: 'right',
          margin: [0, 0, 0, 10]
        },
        thead: {
          bold: true
        }
      }
    }
  }
}
