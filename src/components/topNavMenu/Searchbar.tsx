export default function Searchbar() {
	return (
		<div className="flex flex-row">
			<input type="text" placeholder="search" className="rounded-l-md p-1" />
			<button className="rounded-r-md bg-elixir-orange p-1">Search</button>
		</div>
	);
}
