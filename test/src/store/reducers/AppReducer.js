const initialState = {
    data: {
        imgSrc: './images/landscape_207075.jpg',
        category: 'אוכל',
        title: 'סיור קולינרי  בין המסעדות הערביות הכי טובות בחיפה',
        subTitle: 'גם אני, שעסוק כל השבוע, מתפנה לצפות בטלוויזיה רק בסופי השבוע, ונוכחתי שרוב תוכניות הטלוויזיה בכל הערוצים הן תוכניות אוכל.',
        author: 'שירית גל'
    },
    currCategory: {
        category: 'אוכל',
        color: 'rgb(237 28 36)'
    }
}
export default function AppReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_COLOR': {
            return {
                ...state,
                currCategory: {
                    ...state.currCategory,
                    color: action.color
                }
            }
        }
        case 'SET_CATEGORY_NAME': {

            return {
                ...state,
                currCategory: {
                    ...state.currCategory,
                    category: action.newName
                },
                data: {
                    ...state.data,
                    category: action.newName
                }
            }
        }
        default:
            return state;
    }

};





