"use client";

import { Note } from "@/types/note";
import css from "./NotePreview.module.css";
import { useRouter } from "next/navigation";

interface PropNote {
  note: Note;
}

export default function NotePreviewClient({ note }: PropNote) {

 const router = useRouter();
  
  const close = () => router.back();

  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note.title}</h2>
        </div>
        <p className={css.tag}>{note.tag}</p>
        <p className={css.content}>{note.content}</p>
        <p className={css.date}>{note.createdAt}</p>
      </div>
      <button className={css.backBtn} onClick={close}>Close</button>
    </div>
  );
}
