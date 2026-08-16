import { useState } from "react";
import "./App.css";

  type Member ={
    name: string;
    role: string;
    image: string;
    description: string;
    skills: string[];
    favorite: string;
  };

  type Project ={
    title: string;
    category: string;
    image: string;
    description: string;
    members: string[];
    date: string;
  };

function App(){

  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const [selectedProject, setselectedProject] = useState<Project | null>(null);

  const videos =[
    {
      title: "事件多発のハチャメチャクッキング！？",
      date: "2026.04.17",
      id: "8b0lrf-4Qho",
    },
    {
      title: "広さ1チャンクの世界でサバイバル生活part2.5【作業回】",
      date: "2026.01.31",
      id: "OClA9dIi73Q",
    },
    {
      title: "絶対にネモラに罰ゲームをさせたいメンバーVS仏のネモラ（？）マイクラ同好会クイズ！",
      date: "2023.12.31",
      id: "SfoJ4JY9kjQ",
    },
  ];

  const members =[
    {
      name: "スタンド",
      role: "管理者",
      image: "/images/stand45.png",
      description: "マイクラ同好会を作った人",
      skills: ["アスレ","創造","破壊"],
      favorite: "長距離アスレ",
    },
    {
      name: "さくらと",
      role: "頭脳",
      image: "/images/sakurato45.png",
      description: "頭がとてもいい人",
      skills: ["勉強","デザイン","計算"],
      favorite: "逃走中"
    },
    {
      name: "サファイア",
      role: "プログラマー",
      image: "/images/safa2.png",
      description: "実はハッカー",
      skills: ["タイピング","編集","ハッキング"],
      favorite: "サバイバル"
    },
    {
      name: "ネモラ",
      role: "芸人",
      image: "/images/nemora45.png",
      description: "面白い",
      skills: ["一発ギャグ","コント","ものまね"],
      favorite: "キングオブコント"
    },
  ];

  const project = [
    {
      title: "1チャンクサバイバル",
      category: "survival",
      image: "/images/1chunk.jpg",
      description: "1チャンクの世界でサバイバルする企画",
      members: ["スタンド","サファイア","ネモラ"],
      date: "2025.12"
    },

        {
      title: "たまご賭けゲーム",
      category: "game",
      image: "/images/kajino.jpg",
      description: "マイクラ内でカジノをする企画",
      members: ["スタンド","サファイア","ネモラ","さくらと"],
      date: "2024.09"
    },

        {
      title: "マイクラ力テスト",
      category: "geme",
      image: "/images/maikuraryoku.jpg",
      description: "",
      members: ["スタンド","サファイア","ネモラ","メガネ","and more..."],
      date: "2024.07"
    },

        {
      title: "ファーストテイク",
      category: "song?",
      image: "/images/fisrstake.jpg",
      description: "伝説",
      members: ["サファイア"],
      date: "20xx.xx"
    },
  ];


  return (
    <div className="site">
      {/* ヘッダー */}
      <header className="header">
        <div className="logo">
          ⛏　マイクラ同好会
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#videos">動画</a>
          <a href="#menmbers">メンバー</a>
          <a href="#projects">企画</a>
          <a href="about">ABOUT</a>
        </nav>
      </header>

      {/* メインビジュアル */}
      <section id="home" className="hero">
        <div className="minecraft-sky"></div>

        <div className="hero-content">
          <p className="hero-subtitle">
            MINECRAFT COMMUNITY
          </p>

          <h1>
            マイクラ同好会
          </h1>

          <p className="hero-text">
            Minecraftをもっと楽しむ。
            <br />
            仲間と一緒に、最高の世界を作ろう。
          </p>

          <a href="https://www.youtube.com/@minecraftclub"
             className="youtube-button"
             target="_blank"
             rel="noreferrer">
              ▶ Youtubeを見る
             </a>
        </div>
      </section>

      {/*最新動画*/}
      <section id="videos" className="section">
        <div className="section-title">
          <p>OUR VIDEOS</p>
          <h2>最新動画</h2>
        </div>

        <div className="video-grid">
          {videos.map((video, index) => (
            <div className="video-card" key={index}>

            {/* Youtube動画 */}
            <div className="youtube-container">

              <iframe src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      />
            </div>

              <div className="video-info">
                <p className="video-date">
                  {video.date}
                </p>

                <h3>
                  {video.title}
                </h3>

              <a href={`https://www.youtube.com/watch?v=${video.id}`}
                 target="_blank"
                 rel="noreferrer"
                 className="video-link">
                  Youtubeで見る ⇒
                 </a>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/*メンバー*/}
      <section id="members" className="section members-section">
        <div className="section-title">
          <p>MEMBERS</p>
          <h2>メンバー</h2>
        </div>

        <div className="member-grid">

          {members.map((member, index) => (
            <div className="member-card" key={index}>

              <div className="skin-container">
                <img src={member.image} alt={member.name} />
              </div>

              <h3>
                {member.name}
              </h3>

              <p className="member-role">
                {member.role}
              </p>

              <p className="member-description">
                {member.description}
              </p>

              <button className="profile-button"
                      onClick={() => setSelectedMember(member)}>
                PROFILE ⇒
              </button>
            </div>
          ))}

        </div>
      </section>

          {selectedMember && (
            <div className="profile-overlay"
                 onClick={() => setSelectedMember(null)}>

                  <div className="profile-model"
                       onClick={(e) => e.stopPropagation()}>

                    <button className="profile-close"
                            onClick={() => setSelectedMember(null)}>
                              x
                    </button>

                    <p className="profile-title">
                      PLAYER PROFILE
                    </p>

                    <div className="profile-content">

                      <div className="profile-image">
                        <img src={selectedMember.image} alt={selectedMember.name} />
                      </div>

                      <div className="profile-info">

                        <h2>
                          {selectedMember.name}
                        </h2>

                        <p className="profile-role">
                          {selectedMember.role}
                        </p>

                        <p className="profile-description">
                          {selectedMember.description}
                        </p>

                        <h3>SKILLS</h3>

                        <div className="slill-list">

                          {selectedMember.skills.map(
                            (skill, index) => (
                              <span key={index}>
                                {skill}
                              </span>
                            )
                          )}
                        </div>

                        <h3>FAVORITE PROJECT</h3>

                        <p className="favorite-project">
                          🎮 {selectedMember.favorite}
                        </p>

                      </div>

                    </div>

                    <button
                      className="profile-close-button"
                      onClick={() => setSelectedMember(null)}>
                        CLOSE
                      </button>

                  </div>
            </div>
          )}

          {/* 企画 */}

          <section
            id="projects"
            className="section projects-section"
          >
            <div className="section-title">
              <p>PROJECTS</p>
              <h2>企画</h2>
            </div>

            <div className="project-grid">

              {project.map((project, index) => (
                <div
                  className="project-card"
                  key={index}
                  onClick={() => setselectedProject(project)}
                >

                  <div className="project-image">

                  <img
                    src={project.image}
                    alt={project.title}
                  />

                  <div className="project-category">
                    {project.category}
                  </div>

                </div>

                <div className="project-info">

                  <p className="project-date">
                    {project.date}
                  </p>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                  <button
                    className="project-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setselectedProject(project);
                    }}
                  >
                    DETAILS →
                  </button>

                </div>

              </div>
            ))}

            </div>
          </section>

          {selectedProject && (
            <div className="project-overlay"
                 onClick={() => setselectedProject(null)}>

                  <div className="project-modal"
                       onClick={(e) => e.stopPropagation()}>

                      {/* 閉じるボタン */}

                      <button className="project-close"
                              onClick={() => setselectedProject(null)}>
                                x
                      </button>

                      {/*企画画像*/}

                      <div className="project-modal-image">
                        <img src={selectedProject.image} alt={selectedProject.title} />
                      </div>

                      {/*企画情報*/}

                      <div className="project-modal-content">

                      <p className="project-modal-category">
                        {selectedProject.category}
                      </p>

                      <h2>
                        {selectedProject.title}
                      </h2>

                      <p className="project-modal-date">
                        📅 {selectedProject.date}
                      </p>

                      {/*参加メンバー*/}

                      <h3>
                        PARTICIPANTS
                      </h3>

                      <div className="participant-lint">

                        {selectedProject.members.map(
                          (member, index) => (
                            <span key={index}>
                              👤 {member}
                            </span>
                          )
                        )}
                      </div>

                    </div>

                    {/*CLOSEボタン*/}

                    <button className="project-close-button"
                            onClick={() => setselectedProject(null)}
                            >
                              CLOSE
                    </button>

                </div>
            </div>
          )}

          {/* ABOUT */}
          <section id="about" className="about">
            <div>
              <p>ABOUT US</p>

              <h2>
                マイクラを、もっと楽しく。
              </h2>

              <p>
                マイクラ同好会は、Minecraftを中心に
                様々な企画や動画制作を行っている
                グループです。
              </p>

              <p>
                建築、サバイバル、ミニゲームなど、
                Minecraftの楽しさを動画を通して
                発信しています。
              </p>
            </div>
          </section>

          {/* ヘッダー */}
          <footer>
            <p>⛏ マイクラ同好会</p>
            <p>© 2026 Minecraft Club</p>
          </footer>
    </div>
  );
}

export default App;