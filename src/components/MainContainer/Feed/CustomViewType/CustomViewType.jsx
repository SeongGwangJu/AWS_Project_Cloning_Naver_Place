import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { useLocation, useNavigate } from "react-router-dom";
import { BiPlus } from "react-icons/bi";
import { MdMyLocation } from "react-icons/md";

function CustomViewType(props) {
	const navigate = useNavigate();
	const location = useLocation();
	const [isSelected, setIsSelected] = useState(false);

	const ViewTypeBtnList = [
		{
			id: 1,
			name: "전체",
			path: "/feed",
		},
		{
			id: 2,
			name: "팔로잉",
			path: "/feed/following",
		},
		{
			id: 3,
			name: <> {<BiPlus css={S.SPlusIcon} />} 관심지역 </>,
			path: "/feed/favorited",
		},
	];

	const handleViewTypeBtnClick = (path) => {
		if(path !== ViewTypeBtnList[2].path) {
			navigate(path);
			setIsSelected(true);
		} else {
			alert("네이버 로그인 하신 후 이용해 주시기 바랍니다.");
		}
	};

	return (
		<div css={S.SBackgroundColor}>
			<div css={S.SContainer}>
				<div css={S.SViewTypeBtnListBoxs}>
					{ViewTypeBtnList.map((ViewTypeBtn) => (
						<div css={S.SViewTypeBtnListBox}>
							<button
								css={S.SViewTypeBtnList(
									location.pathname === ViewTypeBtn.path
								)}
								onClick={() => {
									handleViewTypeBtnClick(ViewTypeBtn.path);
								}}
								key={ViewTypeBtn.id}
							>
								{ViewTypeBtn.name}
							</button>
						</div>
					))}
				</div>
				<div css={S.SCurrenLocationBox}>
					<div css={S.SDivisionLine}></div>
					<button css={S.SCurrenLocationBtn}>
						<MdMyLocation
							css={S.SCurrenLocationIcon}
							fill="#7f8daa"
						/>
						현위치
					</button>
				</div>
			</div>
		</div>
	);
}

export default CustomViewType;
