import { useState } from "react";
import styles from "./styles.module.css";
;

const Pagination = (props) => {
	const { page, total, limit, setPage } =  props ;
	const totalPages = Math.ceil(total / limit);

	const onClickPage = (pageNo) => {
		setPage(pageNo);
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

	const handleOnClick = (index) =>{
		let pageNo = 0;
		if(page>5){
			pageNo = page-4+index;
			console.log(pageNo);
			onClickPage(pageNo);
		}
		else {
			onClickPage(index+1);
		}
	}

	return (
		<div className={styles.container}>
			<div
				onClick={navigateToPreviousPage}
				disabled={page === 1}
				className={page > 1 ? styles.previous : styles.disabled}>Previous</div>
			{totalPages > 0 &&
				[...Array(5)].map((val, index) => (
					<button
						onClick={()=>handleOnClick(index)}
						className={
							page === index + 1 ||  (page > 5 && page === page-4+index )
								? `${styles.page_btn} ${styles.active}`
								: styles.page_btn
						}
						key={index}
					>
						{ page-5> 0 ? page-4+index : index + 1}
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
