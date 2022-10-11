import styles from "./styles.module.css";
import { BsSearch } from 'react-icons/bs'

const Search = (props) => {
	const { setSearch, onPressEnter, getAllMovies} = props;
	return (
		<div className={styles.searchContainer}>
			<input
				type="text"
				className={styles.search}
				placeholder="Search"
				onChange={({ currentTarget: input }) => setSearch(input.value)}
				onKeyDown={onPressEnter}
			/>
			<div onClick={getAllMovies}>
				<BsSearch color="white" />
			</div>
		</div>
	);
};

export default Search;
