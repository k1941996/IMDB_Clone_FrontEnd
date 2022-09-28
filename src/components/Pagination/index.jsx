import { useState } from "react";
import styles from "./styles.module.css";

const Pagination = ({ page, total, limit, setPage }) => {
	const totalPages = Math.ceil(total / limit);

	const onClick = (newPage) => {
		setPage(newPage + 1);
	};

	const navigateToPreviousPage = () => {
		if (page > 1) {
			setPage(page - 1)
		}
	}

	const navigateToNextPage = () => {
		if (page < totalPages)
			setPage(page + 1)
	}

	return (
		<div className={styles.container}>
			<div
				onClick={navigateToPreviousPage}
				disabled={page === 1}
				className={page > 1 ? styles.previous : styles.disabled}>Previous</div>
			{totalPages > 0 &&
				[...Array(totalPages)].map((val, index) => (
					<button
						onClick={() => onClick(index)}
						className={
							page === index + 1
								? `${styles.page_btn} ${styles.active}`
								: styles.page_btn
						}
						key={index}
					>
						{index + 1}
					</button>
				))}
			<div onClick={navigateToNextPage} 
			disabled={page >= totalPages}
			className={
				page >= totalPages
					? styles.disabled	:styles.next
			}>Next</div>

		</div>
	);
};

export default Pagination;
