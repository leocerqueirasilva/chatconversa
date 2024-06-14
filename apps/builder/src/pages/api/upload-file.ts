import type { NextApiRequest, NextApiResponse } from 'next';
import { uploadFileToBucket } from '@typebot.io/lib/s3/uploadFileToBucket';

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const chunks: Uint8Array[] = [];
    for await (const chunk of req) {
      chunks.push(chunk);
    }
    const fileData = Buffer.concat(chunks);
    const mimeType = req.headers['content-type'] || 'application/octet-stream';
    const fileName = req.headers['x-file-name'] as string;
    const key = `avatars/${fileName}`;

    const uploadedUrl = await uploadFileToBucket({ key, file: fileData, mimeType });
    res.status(200).json({ url: uploadedUrl });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'Error uploading file' });
  }
};

export default handler;
