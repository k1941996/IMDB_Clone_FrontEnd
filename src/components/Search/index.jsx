import styles from "./styles.module.css";

const Search = (props) => {
	const { setSearch,onPressEnter } = props;
	return (
		<input
			type="text"
			className={styles.search}
			placeholder="Search"
			onChange={({ currentTarget: input }) => setSearch(input.value)}
			onKeyDown={onPressEnter}
		/>
	);
};

export default Search;
