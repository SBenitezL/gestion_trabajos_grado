import { PDFDocument, PDFPage, StandardFonts, breakTextIntoLines, rgb } from "pdf-lib";
import fs from 'fs';
import path from "path";
import { Content, isImageContent, isTextContent } from "./PDFContent";
import DatosReporteA from "../../../DTO/Report/DatosReporteA";
import DatosReporteB from "../../../DTO/Report/DatosReporteB";

const currentPage = {
    marginLeft:85,
    marginRigth:72,
    marginUp:72,
    marginDown:72,
    indentation:0,
    x:0,
    y:0    
}
let datos:DatosReporteA;
let datosB:DatosReporteB;
export default async function createPDFFA(filePath:string, datosA:DatosReporteA)
{
    datos = datosA
    const pdfDoc = await PDFDocument.create();
    await createFirstPage(pdfDoc);
    await save(filePath,pdfDoc);
}
async function createFirstPage(pdfDoc:PDFDocument)
{
    const page = pdfDoc.addPage();
    await addEncabezadoText(page, pdfDoc);
    let content = `TTITULO: ${datos.proceso.titulo}`
    await addPageContent(content,page,pdfDoc);
    let i = 1;
    for(let estudiante of datos.estudiante)
    {
        content = `ESTUDIANTE ${i}: ${estudiante.nombre} CODIGO: ${estudiante.codigo}`
        await addPageContent(content, page, pdfDoc);
    }
    content = `DIRECTOR DEL TRABAJO: ${datos.proceso.director}`;
    await addPageContent(content, page, pdfDoc);
    await addPageContent('', page, pdfDoc);
    content = `OBJETIVOS: ${datos.formato.objetivos}`
    await addPageContent(content, page, pdfDoc);
    content = `CONDICIONES DE ENTREGA: ${datos.formato.condEntrega}`;
    await addPageContent(content, page, pdfDoc);
    content = `APORTES O CONTRIBUCION A LAS LINES DE INVESTIGACIÓN Y DESARROLLO O TEMAS DE INTERES DEL DEPARTAMENTO: ${datos.formato.aportes}`;
    await addPageContent(content, page, pdfDoc);
    content = `TIEMPO ESTIMADO DE REALIZACIÓN: ${datos.formato.realizacion}`;
    await addPageContent(content, page, pdfDoc);
    content = `RECURSOS REQUERIDOS: ${datos.formato.recursos}`;
    await addPageContent(content, page, pdfDoc);
    content = `DEFINICION DE FUENTES DE FINANCIACION: ${datos.formato.financiacion}`;
    await addPageContent(content, page, pdfDoc);
    content = `FECHA: ${datos.formato.recibido}`;
    await addPageContent(content, page, pdfDoc);
}
export async function createFormatoB(filePath:string, datosB:DatosReporteB) {
    datosB = datosB
    const pdfDoc = await PDFDocument.create();
    await llenarFormatoB(pdfDoc);
    await save(filePath,pdfDoc);
}
async function llenarFormatoB(pdfDoc:PDFDocument) {
    const page = pdfDoc.addPage();
    await addEncabezadoText(page, pdfDoc);
    let content = `TTITULO: ${datos.proceso.titulo}`
    await addPageContent(content,page,pdfDoc);
    let i = 1;
    for(let estudiante of datos.estudiante)
    {
        content = `ESTUDIANTE ${i}: ${estudiante.nombre} CODIGO: ${estudiante.codigo}`
        await addPageContent(content, page, pdfDoc);
    }
    content = `DIRECTOR DEL TRABAJO: ${datos.proceso.director}`;
    await addPageContent(content, page, pdfDoc);
    if(datosB.tipo == "PP-B"){
        content = `ASESOR DE LA ORGANIZACIÓN: ${datosB.proceso.asesor}`;
        await addPageContent(content, page, pdfDoc);
    }
    await addPageContent('', page, pdfDoc);
    let valor = ""
    await addPageContent('ELEMENTOS CONSIDERADOS', page, pdfDoc);

    if(datosB.formato.B_APORTES > 0) valor = "Aprobado"
    else valor = "Rechazado" 
    content = `A) PRESENTACION Y APORTES (Están indicados con claridad?) ${valor}`;
    await addPageContent(content, page, pdfDoc);

    if(datosB.formato.B_OBJETIVOS > 0) valor = "Aprobado"
    else valor = "Rechazado" 
    content = `B) OBJETIVOS (Establecidos claramente?) ${valor}`;
    await addPageContent(content, page, pdfDoc);

    if(datosB.formato.B_METODOLOGIA > 0) valor = "Aprobado"
    else valor = "Rechazado" 
    content = `C) METODOLOGÍA (Se indica explícitamente?) ${valor}`;
    await addPageContent(content, page, pdfDoc);

    if(datosB.formato.B_ENTREGA > 0) valor = "Aprobado"
    else valor = "Rechazado" 
    content = `D) CONDICIONES DE ENTREGA (Se establecen claramente?) ${valor}`;
    await addPageContent(content, page, pdfDoc);

    if(datosB.formato.B_CRONOGRAMA > 0) valor = "Aprobado"
    else valor = "Rechazado" 
    content = `E) CRONOGRAMA (se indica en forma clara y completa?) ${valor}`;
    await addPageContent(content, page, pdfDoc);

    if(datosB.formato.B_PATROCINIO > 0) valor = "Aprobado"
    else valor = "Rechazado" 
    content = `F) PATROCINIO (existe?) ${valor}`;
    await addPageContent(content, page, pdfDoc);

    if(datosB.formato.B_CONCEPTO > 0) valor = "Aprobado(X) No Aprobado()"
    else valor = "Aprobado() No Aprobado(X)" 
    content = `G) CONCEPTO GENERAL (existe?) ${valor}`;
    await addPageContent(content, page, pdfDoc);

    await addPageContent('OBSERVACIONES', page, pdfDoc);
    await addPageContent(datosB.formato.B_OBSERVACIONES, page, pdfDoc);
    let fecha = datosB.formato.B_REVISION;
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Nota: los meses van de 0 a 11
    const año = fecha.getFullYear();
    const fechaComoString: string = `${dia}/${mes}/${año}`;
    await addPageContent(`FECHA: ${fechaComoString}`, page, pdfDoc);
    await addPageContent(`${datosB.evaluador}`, page, pdfDoc);
}
async function createSecondPage(pdfDoc:PDFDocument)
{
    const page = pdfDoc.addPage();
    const imagePath = path.join(__dirname,'..','..','..','..','images','logo.png');
    console.log(imagePath);
    const imageBuffer = fs.readFileSync(imagePath);
    console.log("despues");
    await addPageContent(imageBuffer,page,pdfDoc);
}
async function addPageContent(content: Content, page:PDFPage, pdfDoc:PDFDocument)
{
    if(isTextContent(content))
    {
        addText(content, page, pdfDoc);
    }else if(isImageContent(content))
    {
        addImage(content,page, pdfDoc);
    }
}
async function addImage(content:Buffer, page: PDFPage, pdfDoc:PDFDocument){
    const embeddedImage = await pdfDoc.embedPng(content);
    const imageDimension = embeddedImage.scale(0.7);
    page.drawImage(embeddedImage,{
        x:72,
        y:page.getHeight() - (imageDimension.height/2 + currentPage.marginUp)-10,
        width: 85,
        height: 100
    })
}
async function addText(text:string, page:PDFPage, pdfDoc:PDFDocument){
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    const fontSize = 11;
    const {height, width} = page.getSize();
    const lines = brakeTextIntoLines(text,timesRomanFont,fontSize,width-(currentPage.marginLeft+currentPage.marginRigth));
    let h = currentPage.y
    for(const line of lines)
    {
        if(h - (currentPage.marginUp + fontSize) < 0)
        {
            const newPage = pdfDoc.addPage();
            await addEncabezadoText(newPage, pdfDoc);
            h = height - fontSize;
            page.drawText(line, { x: currentPage.marginLeft, y: h, font: timesRomanFont, size: fontSize, color: rgb(0, 0, 0) });
        }
        else{
            page.drawText(line, { x: currentPage.marginLeft, y: h, font: timesRomanFont, size: fontSize, color: rgb(0, 0, 0) });
        }
        h = h - fontSize;
    }
    currentPage.y = h;
}
async function addEncabezadoText(page:PDFPage, pdfDoc:PDFDocument)
{
    const lineas:string[] = ['Universidad del Cauca', 'Facultad de Ingeniería Electrónica y Telecomunicaciones',''];
    lineas.push(`TRABAJO DE GRADO - MODALIDAD ${datos.proceso.tipo}`);
    lineas.push('');
    lineas.push(`FORMATO ${datos.tipo} PRESENTACIÓN DE LA PROPUESTA DE TRABAJO`);
    lineas.push(`DE GRADO MODALIDAD ${datos.proceso.tipo} AL`);
    lineas.push('COMITÉ DE PROGRAMA DEL ESTUDIANTE');
    lineas.push('');
    const imagePath = path.join(__dirname,'..','..','..','..','..','..','images','logo.png');
    const imageBuffer = fs.readFileSync(imagePath);
    await addPageContent(imageBuffer, page, pdfDoc);
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    const fontSize = 11;
    const {height, width} = page.getSize();
    currentPage.y = height- (currentPage.marginUp + fontSize);
    let h = currentPage.y
    for(let linea of lineas)
    {
        let lineWidth = timesRomanFont.widthOfTextAtSize(linea,fontSize);
        page.drawText(linea,{font: timesRomanFont,size:fontSize,x: 30 + width/2 - lineWidth/2, y:h, color: rgb(0, 0, 0)})
        h = h - fontSize;
    }
    currentPage.y = h;
}
async function save(filePath:string, pdfDoc:PDFDocument) {
    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync(filePath,pdfBytes);
}
function brakeTextIntoLines(text:string, font:any, fontSize:number, maxWidth:number):string[]
{
    const lines: string[] = [];
    let currentLine = '';
    let currentWidth = 0;
    const words:string[] = text.split(/\s+/);
    words.forEach(word =>{
        const wordWidth = currentWidth + font.widthOfTextAtSize(word, fontSize);
        if (currentLine.length + wordWidth < maxWidth) {
            currentLine += `${word} `;
            currentWidth = wordWidth;
        } else {
            lines.push(currentLine.trim());
            currentLine = `${word} `;
            currentWidth = 0;
        }
        if(/\n$/.test(word))
        {
            lines.push(currentLine.trim());
            currentLine = '';
            currentWidth = 0;
        }
    })
    // Agrega la última línea
    lines.push(currentLine.trim());
    return lines;
}
