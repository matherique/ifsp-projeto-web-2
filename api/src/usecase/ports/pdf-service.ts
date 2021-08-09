export interface PDFService {
  generate(title: string, thead: string[], data: any[][]): Promise<Buffer>
}
