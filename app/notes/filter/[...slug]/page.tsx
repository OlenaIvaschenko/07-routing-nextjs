
import NoteClient from "./Notes.client";

type Props = {
  params: Promise<{ slug: string[] }>;
};

const Notes = async ({ params }: Props) => {
  const { slug } = await params;

  console.log(slug);

  return <NoteClient tag={slug[0]} />;
};

export default Notes;
