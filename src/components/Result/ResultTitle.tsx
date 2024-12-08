import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const ResultTitle = () => {
  // 現在のページをリフレッシュ

  // const navigate = useNavigate();
  const handleRefresh = () => {
    // navigate(0);
    window.location.reload(); // 履歴を残さないためリロード
  };

  return (
    <div className="my-8 flex flex-col items-center text-muted-foreground">
      <p>歩数データから睡眠推定を行いました。</p>
      <p>日々の睡眠習慣に役立ててください。</p>
      <div className="mt-4 flex w-52 gap-4">
        <Link to="/">
          <Button className="bg-primary-gradient text-white transition-all duration-100 hover:opacity-80">
            終了する
          </Button>
        </Link>
        <Button onClick={handleRefresh}>もう一度</Button>
      </div>
    </div>
  );
};

export default ResultTitle;
