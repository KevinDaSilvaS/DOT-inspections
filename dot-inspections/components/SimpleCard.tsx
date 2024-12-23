
interface SimpleCardProps {
    title: string;
    content: string;
}

export function SimpleCard(props: SimpleCardProps) {
  return (
    <div class="p-5 w-full bg-slate-100 rounded-md shadow-md">
        <h2 class="text-xl font-sans text-slate-900">{ props.title }</h2>
        <p class="font-sans text-slate-600">{ props.content }</p>
    </div>
  );
}
