import './Banner.module.css';

export function Banner(props) {
  return (
    <a href={props.href} target="_blank" class="resource">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
  );
}
