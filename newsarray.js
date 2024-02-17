// FEDCHAIRSIM v5.0 - 21/12/2023

//Newspapers:
//The National Mail
//Guardian of Democracy
//Business Week
//CoinReview

let goodNews1 = ['<b>Business Week:</b> Economists optimistic that the worst of the downturn is behind us',
                 '<b>Business Week:</b> Business confidence surges as GDP picks up, beating forecasts',
                 '<b>Business Week:</b> Retail spending beats forecasts as consumer confidence recovers',
                 '<b>The National Mail:</b> Unemployment mutual obligations to return as lack of jobs "no longer an excuse" ',
                 '<b>Guardian of Democracy:</b>: Unions call for industrial action unless wages hiked to keep pace with inflation',
                 '<b>Business Week:</b> Stock market rallies in anticipation of strong GDP numbers being announced',
                 '<b>CoinReview:</b> Crypto market volatility at all time lows, what does this mean?',
                 '<b>Guardian of Democracy:</b> Home prices rise 10% year-over-year, lifting them further out of reach of first-home buyers',
                 '<b>Business Week:</b> Gold sells off as fears of recession fade, economy strengthens',
                 '<b>The National Mail:</b> Young investors shunning precious metals they call "Boomer Rocks"',
                 '<b>Business Week:</b> 5 stocks to supercharge your portfilio',
                 '<b>Business Week:</b> Unemployment reaches 5 year low, as labour market tightens further'];


let badNews1 = ['<b>Business Week:</b> Business confidence slumps as experts warn of recession',
                 '<b>Guardian of Democracy:</b> Unemployment reaches 5 year high, welfare groups call for benefit increases',
                 '<b>The National Mail:</b>Stocks tumble as sentiment turns bearish. Is a recession here?',
                 '<b>Guardian of Democracy:</b> Opinion: The case for MMT, why we dont have to be at the mercy of the business cycle',
                 '<b>Guardian of Democracy:</b> Why forgiving Student Loans will greatly help the struggling economy',
                 '<b>Business Week:</b> Consumer confidence tumbles, retail spending hits all time lows',
                 '<b>CoinReview:</b> BTC breaks new low for the year, is the bottom in?',
                 '<b>The National Mail:</b> Why crypto wont protect you in a recession, according to billionare real estate investor',
                 '<b>Guardian of Democracy:</b> What is UBI (Universial Basic Income) and how can it fix our economy?',
                 '<b>Guardian of Democracy:</b> Is this a Pink Recession? Why women are losing more jobs than men',
                 '<b>Guardian of Democracy:</b> Fed Chairman accused of racism, monetary policy hurting the Apustaja people at higher rates',
                 '<b>Business Week:</b> Top 3 stocks to protect your portfolio this recession',
                 '<b>Business Week:</b> Which stocks are bucking the bearish trend?']
                 
let reallyGoodNews1 = ['Stock market index smashes all time highs, is the top in?',
                 '<b>CoinReview:</b> 14 year old makes 2 million selling his NFT collection',
                 '<b>The National Mail:</b> Which jobs are paying over 150k and still cant find workers?',
                 '<b>The Nationals Mail:</b> Farmers offering $1000 a week to pick fruit, but no takers',
                 '<b>The National Mail:</b> Do earnings actually matter when it comes to picking winners in the stock market?',
                 '<b>The National Mail:</b> Millennials "too good" to work manual labour jobs, according to retiree',
                 '<b>Business Week:</b> Home price index breaks all time high, surges 20% year on year',
                 '<b>Guardian of Democracy:</b> What is a NFT and why is everyone talking about them?',
                 '<b>Guardian of Democracy:</b> OnlyFans tax crackdown "misogynistic" according to sex worker advodates',
                 '<b>Guardian of Democracy:</b> Government trialing programme to pay citizens for doing housework, as the sexism of unpaid labour becomes clear',
                 '<b>Guardian of Democracy:</b> Opinion: Why Women should receive an hourly wage for taking care of their kids',
                 '<b>Guardian of Democracy:</b> Opinion: We cannot afford NOT to have a wealth tax on crypto',
                 '<b>CoinReview:</b> Gen Z ditching physical real estate for "NFT Houses"',

                 '<b>Guardian of Democracy:</b> Why NFTs and crypto are a disaster for the environment and wealth equality',
                 '<b>The National Mail:</b> Are Funko Pops a good investment? Yes, according to this 19 year old investor',
                 '<b>CoinReview:</b> 18 year old women sells her virginity as a NFT, in world first',
                 '<b>The National Mail:</b> Teenagers say working is a "scam" and would rather stay home to trade stocks and crypto',
                 '<b>The National Mail:</b> Business groups want government to fine those who are jobless "without a valid excuse"',
                 '<b>The National Mail:</b> Warehouse workers offered $80+ per hour as firms struggle to get goods on the shelves',
                 '<b>CoinReview:</b> Which Layer 1 coins have the biggest growth potential this year?',
                    '<b>Guardian of Democracy:</b> Wealth inequality reaches record highs, Fed Chairman urged to "do something"',
                    '<b>Guardian of Democracy:</b> The case for reperations for the Apustaja people to fight wealth inequality',
                      '<b>Guardian of Democracy:</b> We must force Fed Chairman to provide justice for the Apustaja people',
                      '<b>Guardian of Democracy:</b> Reperations for Apustajas "on the cards" this election',
                      '<b>The National Mail:</b> Why reperations for Apustajas will set dangerous precendent',
                      '<b>Guardian of Democracy:</b> If Fed Chairman will not fix wealth inequality, his hand might be forced']

let reallyBadNews1 = ['Fears unemployment will surge as job listings evaporate',
                 '<b>Guardian of Democracy:</b> Food Bank operator busiest they have ever been, as millions fall into poverty',
                 '<b>Guardian of Democracy:</b> New socialist party surges to top of polls as poverty becomes #1 issue for voters',
                 '<b>Guardian of Democracy:</b> Millions could be weeks away from poverty as welfare benefits slashed to balance budget',
                 '<b>Guardian of Democracy:</b> Opinion: In these desperate times, is violence against central bankers justified?',
                 '<b>Guardian of Democracy:</b> Opinion: Has central bank policy failed, and where do we go from here?',
                 '<b>Guardian of Democracy:</b> Socialist party vows to Force Fed chairman to fund new welfare programs',
                 '<b>The National Mail:</b> Top economists urge Fed Chairman to provide much needed stimulus as economy struggles',
                 '<b>The National Mail:</b> Small business owners "ruined" by Fed Chairmans reckless policy',
                 '<b>Guardian of Democracy:</b> Fed Chairman accused of committing "genocide" with suicidal monetary policy',
                 '<b>Guardian of Democracy:</b> UBI on the table from all parties this upcoming election',
                 '<b>Guardian of Democracy:</b> Opinion: This crushing monetary policy is "murder"',
                 '<b>Guardian of Democracy:</b> Death threats against Fed Chairman at record high - and is that really a bad thing?',
                 '<b>The National Mail:</b> Coo feared as ordinary citizens "have nothing left to lose"',
                 '<b>Guardian of Democracy:</b> Military police deployed as protests against poverty turn violent',
                 '<b>The National Mail:</b> Revolution could be "weeks away" unless something drastic is done',
                     '<b>The National Mail:</b> Nobel Prize Winning Econimist: Fed Chairman is a "f*****g moron"']

let hyperInflationNews = ['<b>Business Week:</b> Inflation spirals out of control as CPI increases by over 15%',
                         '<b>Guardian of Democracy:</b> Government to implement price controls in response to price gouging by gas stations and supermarkets',
                         '<b>Guardian of Democracy:</b> Welfare groups urge governent to increase welfare payments to keep pace with inflation',
                         '<b>The National Mail:</b> Top economist: Fed chairman must hike rates NOW, else inflation will destroy economy',
                         '<b>The National Mail:</b> Opinion: A currency failure is not probable, its inevitible',
                         '<b>Guardian of Democracy:</b> Central bank urged to pull out all stops to fight inflation',
                         '<b>The National Mail:</b> Cash shortages reported at ATMs as currency failure fears mount',
                         '<b>Business Week:</b> Gold premiums surge as demand outstrips supply, amid skyrocketing inflation'
                         
                         ]

let soundMoneyNews = ['<b>Business Week:</b> Fed Chairman effectively abolishes central bank in a radical move',
                      '<b>Business Week:</b> Business leaders praise the stability of the Fed Charimans new monetary system',
                      '<b>Business Week:</b> Why "adjusting for inflation" will become a thing of the past',
                      '<b>Guardian of Democracy:</b> Fed Chairmans radical "free market" policy could put vunerable groups in jeporady',
                      '<b>The National Mail:</b> Wealthy visa applicants hits record high as business outlook looks bright',
                      '<b>The National Mail:</b> Why price deflation is inevitable over the long term',
                      '<b>The National Mail:</b> Why do prices keep falling?',
                      '<b>The National Mail:</b> Mini "baby boom" in wake of Fed Chairman letting go of the reins',
                      '<b>Guardian of Democracy:</b> New monetary regime will make it difficult for the government to borrow money',
                      '<b>Guardian of Democracy:</b> Opinion: Government spending shouldnt be limited by the money supply',
                      '<b>Guardian of Democracy:</b> How will new infastructure be funded without large defecits?',
                      '<b>Guardian of Democracy:</b> Opinion: Why a limited money supply might not be a good thing',
                      '<b>Guardian of Democracy:</b> What will happen when the economy needs to be stimulated?'
]