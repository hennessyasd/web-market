import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../main";
import "../stylesForComponents/pagesStyles.css";

const Pages = observer(() => {
    const { game } = useContext(Context);
    const pageCount = Math.ceil(game.totalCount / game.limit);
    const pages = [];

    for (let i = 0; i < pageCount; ++i) {
        pages.push(i + 1);
    }

    return (
        <div>
            <div className="center">
                <ul className="pagination">
                    {pages.map(page => (
                        <li 
                            key={page}
                            className={game.page === page ? 'active' : ''}
                            onClick={() => game.setPage(page)}
                        >
                            {page}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
});

export default Pages;
