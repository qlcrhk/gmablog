import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Image } from "react-bootstrap";
import ".././asset/game.css";

interface Product {
  id: number;
  title: string;
  contents: string;
}

interface GCardProps {
  poster: string;
  title: string;
}

const Game: React.FC = () => {
  const [title] = useState<string>("asdsa");
  const [poster] = useState<string>(
    "https://images.pexels.com/photos/42415/pexels-photo-42415.jpeg?auto=compress&cs=tinysrgb&w=800"
  );
  const [showAddGame, setShowAddGame] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);
  const a: number[] = [1, 2, 3, 4, 5, 6, 2, 3, 4, 5, 6, 2, 3];

  const handleToggleAddGame = () => {
    setShowAddGame(!showAddGame);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="daily-bg">
        <p>수정 필요</p>
      </div>
      <div>
        {/* <h1>Product List</h1>
        <ul>
          {products.map(product => (
            <li key={product.id}>{product.title} - ${product.contents}</li>
          ))}
        </ul> */}
      </div>

      <div style={{ textAlign: "center" }}>
        <h1>게임 리뷰</h1>
        <button onClick={handleToggleAddGame}>추가</button>
      </div>

      {showAddGame && (
        <div className="add-game">
          <div className="game-wrapper">
            <div>
              <p>게임 제목 입력</p>
              <input name="game-title" />
            </div>
            <div>
              <p>게임 메인 이미지 링크</p>
              <input name="game-image" />
            </div>
            <div className="btn-box">
              <Button>send</Button>
              <Button variant="danger" onClick={handleToggleAddGame}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="game-box">
       <div className=" game-list">
        {a.map((_, index) => (
          <div>
            <div key={index}>
              <GCard poster={poster} title={title} />
            </div>
          </div>
        ))}
       </div>
      </div>

    </>
  );
};

// 게임 목록을 보여주는 컴포넌트
const GCard: React.FC<GCardProps> = (props) => {
  return (
    <div className="game-card">
      <div className="game-poster">
        <Image src={props.poster} />
      </div>
      <div className="card-text">
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default Game;
