import {
  GET_QNAS_FAILURE,
  GET_QNAS_REQUEST,
  GET_QNAS_SUCCESS,
  GET_QNA_DETAIL_FAILURE,
  GET_QNA_DETAIL_REQUEST,
  GET_QNA_DETAIL_SUCCESS,
  UPDATE_QNA_COMMENT_FAILURE,
  UPDATE_QNA_COMMENT_REQUEST,
  UPDATE_QNA_COMMENT_SUCCESS
} from "../constants/actionTypes";

import { qna, qnaDetail } from "../data";

export const fetchQnA = () => dispatch => {
  dispatch({
    type: GET_QNAS_REQUEST
  });

  setTimeout(() => {
    dispatch({
      type: GET_QNAS_SUCCESS,
      payload: {
        items: qna
      }
    });
  }, 1500);
};

export const fetchQnAById = id => dispatch => {
  dispatch({
    type: GET_QNA_DETAIL_REQUEST
  });

  setTimeout(() => {
    dispatch({
      type: GET_QNA_DETAIL_SUCCESS,
      payload: {
        item: qnaDetail
      }
    });
  }, 1500);
};

export const updateComment = (id, comment) => dispatch => {
  dispatch({
    type: UPDATE_QNA_COMMENT_REQUEST
  });

  setTimeout(() => {
    const updatedComment = {
      writer: "홍길동",
      createdAt: "1990.09.17",
      answerd: false,
      title: "제목 제목 제목",
      content:
        "군사법원의 조직·권한 및 재판관의 자격은 법률로 정한다. 언론·출판에 대한 허가나 검열과 집회·결사에 대한 허가는 인정되지 아니한다. 근로자는 근로조건의 향상을 위하여 자주적인 단결권·단체교섭권 및 단체행동권을 가진다. 국민경제의 발전을 위한 중요정책의 수립에 관하여 대통령의 자문에 응하기 위하여 국민경제자문회의를 둘 수 있다. 국가는 농수산물의 수급균형과 유통구조의 개선에 노력하여 가격안정을 도모함으로써 농·어민의 이익을 보호한다.",
      comment: comment
    };

    dispatch({
      type: UPDATE_QNA_COMMENT_SUCCESS,
      payload: {
        updatedItem: updatedComment
      }
    });
  }, 1500);
};
