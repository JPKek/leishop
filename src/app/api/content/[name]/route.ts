import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET(
  request: Request,
  { params }: { params: { name: string } }
) {
  const { name } = params;

  try {
    const filePath = path.join(process.cwd(), 'data', `${name}.json`);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const jsonData = JSON.parse(fileContent);

    return NextResponse.json(jsonData);
  } catch (error) {
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }
}
