import { getProject } from '../../../../sanity/sanity-utils';

type Props = {
  params: { book: string }
}

export default async function Project({ params }: Props) {
  const slug = params.book;
  console.log(slug,params)
  const project = await getProject(slug);

  return <div>{project.name}</div>
}
