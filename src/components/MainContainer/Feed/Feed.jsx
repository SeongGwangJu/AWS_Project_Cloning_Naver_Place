import React, { useEffect, useRef } from "react";
/** @jsxImportSource @emotion/react */
// import * as S from "./Style";
import CustomViewType from "./CustomViewType/CustomViewType";
import CategoryViewType from "./CategoryViewType/CategoryViewType";
import Content from "./Content/Content";
import FeedList from "../../../constants/FeedList";
import { useRecoilState } from "recoil";
import { selectedCategoryState } from '../../../store/selectedCategory';

function Feed(props) {
	const [ selectedCategory, setSelectedCategory ] = useRecoilState(selectedCategoryState);

	//처음 실행하면 SelectedCategory가 "all로 변함"
	const isFirstLoad = useRef(true);
	useEffect(() => {
	if (isFirstLoad.current) {
		isFirstLoad.current = false;
		setSelectedCategory("all");
	}
	},[]);


	return (
		<>
			<CustomViewType />
			<CategoryViewType />
			{FeedList.filter(feed => (selectedCategory ==="all") ?
			true : (selectedCategory === feed.category)).map((feed) => (
				<Content
					id={feed.id}
					category={feed.category}
					location={feed.location}
					userId={feed.userId}
					imgLink={feed.imgLink}
					imgLink2={feed.imgLink2}
					imgLink3={feed.imgLink3}
					reviewTxt={feed.reviewTxt}
					selectedStickerIds={feed.selectedStickerIds}
					date={feed.date}
					placeName={feed.placeName}
				/>
			))}
		</>
	);
}

export default Feed;
