import "./scroll.css"
export default function Playerranking() {
    return (
            <>
                <div className="title">
                    PLAYERS RANKING 2024
                </div>
                <div className="container flex">
                    <div className="player-rankings flex flex-col">
                        <div className="title-players">
                            PLAYERS
                        </div>
                        <div className="rank-bars flex flex-col">
                            <div className="player1">
                                <p>
                                    MAX VERSTAPPEN
                                </p>
                            </div>
                            <div className="player2">
                                <p>
                                    CHARLS LECLERC
                                </p>
                            </div>
                            <div className="player3">
                                <p>
                                    LANDO NORRIS
                                </p>
                            </div>
                            <div className="player4">
                                <p>
                                    CHARLOS SAINZ
                                </p>
                            </div>
                            <div className="player5">
                                <p>
                                    SERGIO PEREZ
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="player-image">

                    </div>
                </div>
            </>
    );
}