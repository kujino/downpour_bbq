import CommentsPanel from "./CommentsPanel";
import BellCountPanel from "./BellCountPanel.tsx";
import "./SideMenu.css";

type Props = {
  activeSection: "about" | "comment" | null;
  bellCount: number | null;
};

const SideMenuContent = ({ activeSection, bellCount }: Props) => {

  if (activeSection === "about") {
    return (
      <div>
        <h3>About</h3>
        <p>Web Orinは、いつ、どこでもお鈴を鳴らせるWebアプリです。</p>
          <p>
            効果音：   
            <a
              href="https://otologic.jp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              OtoLogic
            </a>
              &nbsp; 様
          </p>

          <h3>お鈴（おりん）とは？</h3>
          <p>お鈴は、仏教において瞑想や修行の合図として用いられたり、お葬式や仏壇に手を合わせる際に、故人に感謝や敬意を表すために鳴らされる仏具です。</p>
      </div>
    );
  }

  if (activeSection === "comment") {
    return <CommentsPanel />;
  }

  return <BellCountPanel count={bellCount} />;
};

export default SideMenuContent;
