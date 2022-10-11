import styles from "./styles.module.css";

const Genre = (props) => {
	const { genres, filterGenre, setFilterGenre } = props;
	const onChange = (e) => {
		if (e.target.checked) {
			const state = [...filterGenre, e.target.name];
			setFilterGenre(state);
		} else {
			const state = filterGenre.filter((val) => val !== e.target.name);
			setFilterGenre(state);
		}
	};

	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Filter By Genre</h1>
			<div className={styles.genre_container}>
				{genres.map((genre,index) => (
					<div className={styles.genre} key={genre}>
						<input
							className={styles.genre_input}
							type="checkbox"
							name={genre}
							checked={filterGenre.includes(genre)?true:false}
							onChange={onChange}
						/>
						<p className={styles.genre_label}>{genre}</p>
					</div>
				))}
			<button onClick={props.reset}>Reset</button>
			</div>
		</div>
	);
};

export default Genre;
