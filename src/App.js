import "./App.css";
import { useEffect, useReducer, useState } from "react";

const questions = [
  {
    quiz: "Which line are you using in this Application",
    option: ["1.MTN", "2.AIRTEL", "Tigo", "Safaricom", "Vodacom", "Zamtel"],
    id: 1,
  },

  {
    quiz: "ACCORDING TO OUR ORGANIZATION OFFER WHAT WILL PLAN WITH OUR FUNDS🇺🇸",
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
  const [Kiswahili, setKiswahili] = useState(false);
  function onkiswahili() {
    setKiswahili(Kiswahili === true ? false : true);
  }

  return (
    <div className="prom-container">
      <div>
        <div className="top_nav">
          <button onClick={onMenuOpen} className="nav_btn">
            <ion-icon name="menu-outline"></ion-icon>
          </button>

          <button className="nav_btn">
            {" "}
            <ion-icon name="person-outline"></ion-icon> <span>Account</span>
          </button>
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
              <p>language/Lugha👉</p>
              <button onClick={onkiswahili}>
                {!Kiswahili ? "Kiswahili" : "English"}
              </button>
            </div>
            <div className="promtext">
              <img src="/prom2.jpg" alt="pron" />
              {!Kiswahili ? (
                <p>
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
              <img src="/transac.jpg" alt="pron" />
            </div>
            <div className="wwhatsapp">
              <p>Bonyeza kiungo cha WhatsApp hapa chini kuomba sasa!</p>
              <a
                href="https://api.whatsapp.com/send?phone=254735011774&text=Hello!%20I'd%20like%20your%20PROMOTION"
                className="whatsapp"
              >
                {" "}
                whatApp
              </a>
            </div>
            <button className="btn_apply" onClick={handleSetHome}>
              Apply Now
            </button>
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
          <h5>Create or Login If You have an Account</h5>
          <button className="btn_apply" onClick={onregister}>
            Create Account
          </button>
          <button className="btn_apply">Login to your Account</button>
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
          <option value="Kenya">Kenya</option>
          <option value="Tanzania">Tanzania</option>
          <option value="Uganda">Uganda</option>
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
              <h6>
                Congratulations for Creating Account Succefully you are Ready to
                start application{" "}
              </h6>
              {/* <h4> Welcome {name} you are Ready to start applicatio </h4> */}
              <p>
                Your have been reqistered <strong>successfully</strong> in our
                funding Programme. Now you are required to answer few
                questions,and at the end you are also required to choose the
                amount of Funds that you need, Thank You.
              </p>
              <button onClick={onlandd}> CONTINUE</button>
            </>
          ) : (
            <>
              {!Finish ? (
                <Quizes
                  onSetbalance={onSetbalance}
                  onFinish={onFinish}
                  balance={balance}
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
          </div> */}
          <h2>
            {name}
            <span>
              <ion-icon name="checkmark-circle-outline"></ion-icon>
            </span>
          </h2>
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
  return (
    <div className="congra_message">
      <h2> Congratulations For Reaching the last Step</h2>
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
          𝒇𝒓𝒐𝒎 <i>FUNDING PROGRAMME</i>. We thereby want congratulate you for
          contacting and making your application🎉. Ensure to use these money in
          an helpfull/development Way.{" "}
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
        </p>{" "}
        𝕔𝕠𝕟𝕘𝕣𝕒𝕥𝕦𝕝𝕒𝕥𝕚𝕠𝕟 🎁To continue click the whatsapp link below to reach to
        agent on whatApp who will guide on how to activate your Awards within 10
        MINUTES. Your promotion is to be dispersed to your line within 5 minutes
        after Activation.
      </div>
      <p>
        <strong>
          NOW COPY/SCREENSHOT THIS CONGRATULATION MESSAGE AND SEND IT TO US ON
          WHATSAPP.
        </strong>
      </p>
      <a
        href="https://api.whatsapp.com/send?phone=254735011774&text=Hello!%20I'd%20like%20your%20PROMOTION"
        className="whatsapp"
      >
        <ion-icon name="logo-whatsapp"></ion-icon>
      </a>
    </div>
  );
}

function Quizes({ balance, onSetbalance, onFinish }) {
  const [currentId, setCurrentId] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [nextactive, setnextacti] = useState(null);
  const [price, setprice] = useState(false);

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
          {moneyoption.map((quiz) => (
            <div key={quiz.id}>
              <h4>{quiz.quiz}</h4>
              {quiz.option.map((opt, index) => (
                <button
                  key={index}
                  onClick={(e) => onSetbalance(e.target.value, opt.activation)}
                  value={opt.amount}
                  className={`${balance === opt.amount ? "select_btn" : ""}`}
                >
                  {opt.type}
                </button>
              ))}
            </div>
          ))}
          <button
            onClick={onFinish}
            className="btn_next"
            disabled={!balance}
            style={{
              backgroundColor: "rgb(11, 11, 45)",
              color: "white",
              width: "8rem",
              fontWeight: "bold",
              marginLeft: "74%",
              alignSelf: "right",
            }}
          >
            Finish
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
