import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

import { db } from '@/firebase/config'
import type { ContactMessage } from '@/types/contact'

export async function sendContactMessage(data: ContactMessage) {
  await addDoc(collection(db, 'messages'), {
    name: data.name,
    email: data.email,
    message: data.message,
    createdAt: serverTimestamp(),
  })
}
