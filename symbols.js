const symbols = [
    {
    Symbol: "A",
    CompanyName: "Agilent Technologies, Inc. Common Stock"
    },
    {
    Symbol: "AA",
    CompanyName: "Alcoa Inc. Common Stock"
    },
    {
    Symbol: "AA$B",
    CompanyName: "Alcoa Inc. Depository Shares Representing 1/10th Preferred Convertilble Class B Series 1"
    },
    {
    Symbol: "AAC",
    CompanyName: "AAC Holdings, Inc. Common Stock"
    },
    {
    Symbol: "AAN",
    CompanyName: "Aaron's, Inc. Common Stock"
    },
    {
    Symbol: "AAP",
    CompanyName: "Advance Auto Parts Inc Advance Auto Parts Inc W/I"
    },
    {
    Symbol: "AAT",
    CompanyName: "American Assets Trust, Inc. Common Stock"
    },
    {
    Symbol: "AAV",
    CompanyName: "Advantage Oil & Gas Ltd Ordinary Shares"
    },
    {
    Symbol: "AB",
    CompanyName: "Allianceberstein Holding L.P. Units"
    },
    {
    Symbol: "ABB",
    CompanyName: "ABB Ltd Common Stock"
    },
    {
    Symbol: "ABBV",
    CompanyName: "AbbVie Inc. Common Stock"
    },
    {
    Symbol: "ABC",
    CompanyName: "AmerisourceBergen Corporation (Holding Co) Common Stock"
    },
    {
    Symbol: "ABEV",
    CompanyName: "Ambev S.A. American Depositary Shares (Each representing 1 Common Share)"
    },
    {
    Symbol: "ABG",
    CompanyName: "Asbury Automotive Group Inc Common Stock"
    },
    {
    Symbol: "ABM",
    CompanyName: "ABM Industries Incorporated Common Stock"
    },
    {
    Symbol: "ABR",
    CompanyName: "Arbor Realty Trust Common Stock"
    },
    {
    Symbol: "ABR$A",
    CompanyName: "Arbor Realty Trust Preferred Series A"
    },
    {
    Symbol: "ABR$B",
    CompanyName: "Arbor Realty Trust Cumulative Redeemable Preferred Series B"
    },
    {
    Symbol: "ABR$C",
    CompanyName: "Arbor Realty Trust Cumulative Redeemable Preferred Series C"
    },
    {
    Symbol: "ABRN",
    CompanyName: "Arbor Realty Trust 7.375% Senior Notes due 2021"
    },
    {
    Symbol: "ABT",
    CompanyName: "Abbott Laboratories Common Stock"
    },
    {
    Symbol: "ABX",
    CompanyName: "Barrick Gold Corporation Common Stock"
    },
    {
    Symbol: "ACC",
    CompanyName: "American Campus Communities Inc Common Stock"
    },
    {
    Symbol: "ACCO",
    CompanyName: "Acco Brands Corporation Common Stock"
    },
    {
    Symbol: "ACE",
    CompanyName: "Ace Limited Common Stock"
    },
    {
    Symbol: "ACG",
    CompanyName: "Alliancebernstein Income Fund"
    },
    {
    Symbol: "ACH",
    CompanyName: "Aluminum Corporation of China Limited American Depositary Shares"
    },
    {
    Symbol: "ACI",
    CompanyName: "Arch Coal, Inc. Common Stock"
    },
    {
    Symbol: "ACM",
    CompanyName: "AECOM Common Stock"
    },
    {
    Symbol: "ACMP",
    CompanyName: "Access Midstream Partners, L.P. Common Units Representing Limited Partner Interests"
    },
    {
    Symbol: "ACN",
    CompanyName: "Accenture plc. Class A Ordinary Shares (Ireland)"
    },
    {
    Symbol: "ACP",
    CompanyName: "Avenue Income Credit Strategies Fund Common Shares"
    },
    {
    Symbol: "ACRE",
    CompanyName: "Ares Commercial Real Estate Corporation Common Stock"
    },
    {
    Symbol: "ACT",
    CompanyName: "Actavis plc Ordinary Shares"
    },
    {
    Symbol: "ACW",
    CompanyName: "Accuride Corporation Common Stock"
    },
    {
    Symbol: "ADC",
    CompanyName: "Agree Realty Corporation Common Stock"
    },
    {
    Symbol: "ADM",
    CompanyName: "Archer"
    },
    {
    Symbol: "ADPT",
    CompanyName: "Adeptus Health Inc. Common Stock"
    },
    {
    Symbol: "ADS",
    CompanyName: "Alliance Data Systems Corporation Common Stock"
    },
    {
    Symbol: "ADT",
    CompanyName: "ADT Corporation Common Stock"
    },
    {
    Symbol: "ADX",
    CompanyName: "Adams Express Company (The)"
    },
    {
    Symbol: "AEB",
    CompanyName: "AEGON N.V. Perp. Cap. Secs. Floating Rate (Netherlands)"
    },
    {
    Symbol: "AEC",
    CompanyName: "Associated Estates Realty Corporation Common Stock"
    },
    {
    Symbol: "AED",
    CompanyName: "AEGON N.V. Perp. Cap. Securities (Netherlands)"
    },
    {
    Symbol: "AEE",
    CompanyName: "Ameren Corporation Common Stock"
    },
    {
    Symbol: "AEG",
    CompanyName: "AEGON N.V. Common Stock"
    },
    {
    Symbol: "AEH",
    CompanyName: "AEGON N.V. Perp. Cap Secs."
    },
    {
    Symbol: "AEK",
    CompanyName: "Aegon NV 8.00% Non"
    },
    {
    Symbol: "AEL",
    CompanyName: "American Equity Investment Life Holding Company Common Stock"
    },
    {
    Symbol: "AEM",
    CompanyName: "Agnico Eagle Mines Limited Common Stock"
    },
    {
    Symbol: "AEO",
    CompanyName: "American Eagle Outfitters, Inc. Common Stock"
    },
    {
    Symbol: "AEP",
    CompanyName: "American Electric Power Company, Inc. Common Stock"
    },
    {
    Symbol: "AER",
    CompanyName: "Aercap Holdings N.V. Ordinary Shares"
    },
    {
    Symbol: "AES",
    CompanyName: "The AES Corporation Common Stock"
    },
    {
    Symbol: "AES$C",
    CompanyName: "AES Corporation (The) Class C Preferred Stock"
    },
    {
    Symbol: "AET",
    CompanyName: "Aetna Inc. Common Stock"
    },
    {
    Symbol: "AF",
    CompanyName: "Astoria Financial Corporation Common Stock"
    },
    {
    Symbol: "AF$C",
    CompanyName: "Astoria Financial Corporation Depositary Shs Repstg 1/40th Int Perp Pfd Ser C 6.5%"
    },
    {
    Symbol: "AFA",
    CompanyName: "American Financial Group, Inc. 5.75% Senior Notes due 2042"
    },
    {
    Symbol: "AFB",
    CompanyName: "AllianceBernstein National Municipal Income Fund Inc"
    },
    {
    Symbol: "AFC",
    CompanyName: "Allied Capital Corporation Allied Capital Corporation 6.875% Notes due April 15, 2047"
    },
    {
    Symbol: "AFG",
    CompanyName: "American Financial Group, Inc. Common Stock"
    },
    {
    Symbol: "AFGE",
    CompanyName: "American Financial Group, Inc. 6.25% Subordinated Debentures due 2054"
    },
    {
    Symbol: "AFL",
    CompanyName: "AFLAC Incorporated Common Stock"
    },
    {
    Symbol: "AFM",
    CompanyName: "Affiliated Managers Group, Inc. 5.250% Senior Notes due 2022"
    },
    {
    Symbol: "AFQ",
    CompanyName: "American Financial Group, Inc. 7% Senior Notes due 2050"
    },
    {
    Symbol: "AFSD",
    CompanyName: "Aflac Incorporated 5.50% Subordinated Debentures due September 15, 2052"
    },
    {
    Symbol: "AFSI$A",
    CompanyName: "AmTrust Financial Services, Inc. Preferred Series A"
    },
    {
    Symbol: "AFSI$B",
    CompanyName: "AmTrust Financial Services, Inc. Depository Shares Representing 1/40th Preferred Series B"
    },
    {
    Symbol: "AFSI$C",
    CompanyName: "AmTrust Financial Services, Inc. Depository Shares Representing 1/40th Preferred Series C"
    },
    {
    Symbol: "AFT",
    CompanyName: "Apollo Senior Floating Rate Fund Inc. Common Stock"
    },
    {
    Symbol: "AFW",
    CompanyName: "American Financial Group, Inc. 6 3/8% Senior Notes due 2042"
    },
    {
    Symbol: "AG",
    CompanyName: "First Majestic Silver Corp. Ordinary Shares (Canada)"
    },
    {
    Symbol: "AGC",
    CompanyName: "Advent Claymore Convertible Securities and Income Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "AGCO",
    CompanyName: "AGCO Corporation Common Stock"
    },
    {
    Symbol: "AGD",
    CompanyName: "Alpine Global Dynamic Dividend Fund Shares of Beneficial Interest"
    },
    {
    Symbol: "AGI",
    CompanyName: "Alamos Gold Inc Ordinary Shares"
    },
    {
    Symbol: "AGM",
    CompanyName: "Federal Agricultural Mortgage Corporation Common Stock"
    },
    {
    Symbol: "AGM$A",
    CompanyName: "Federal Agricultural Mortgage Corporation 5.875% Non"
    },
    {
    Symbol: "AGM$B",
    CompanyName: "Federal Agricultural Mortgage Corporation Non Cumulative Preferred Stock Series B"
    },
    {
    Symbol: "AGM$C",
    CompanyName: "Federal Agricultural Mortgage Corporation Preferred Series C Fixed to Fltg"
    },
    {
    Symbol: "AGM.A",
    CompanyName: "Federal Agricultural Mortgage Corporation Common Stock"
    },
    {
    Symbol: "AGN",
    CompanyName: "Allergan, Inc. Common Stock"
    },
    {
    Symbol: "AGO",
    CompanyName: "Assured Guaranty Ltd. Common Stock"
    },
    {
    Symbol: "AGO$B",
    CompanyName: "Assured Guaranty Ltd."
    },
    {
    Symbol: "AGO$E",
    CompanyName: "Assured Guaranty Ltd."
    },
    {
    Symbol: "AGO$F",
    CompanyName: "Assured Guaranty Ltd."
    },
    {
    Symbol: "AGRO",
    CompanyName: "Adecoagro S.A. Common Shares"
    },
    {
    Symbol: "AGU",
    CompanyName: "Agrium Inc. Common Stock"
    },
    {
    Symbol: "AGX",
    CompanyName: "Argan, Inc. Common Stock"
    },
    {
    Symbol: "AHC",
    CompanyName: "A.H. Belo Corporation Common Stock"
    },
    {
    Symbol: "AHH",
    CompanyName: "Armada Hoffler Properties, Inc. Common Stock"
    },
    {
    Symbol: "AHL",
    CompanyName: "Aspen Insurance Holdings Limited Ordinary Shares"
    },
    {
    Symbol: "AHL$A",
    CompanyName: "Aspen Insurance Holdings Limited Perp Pfd Shares (Bermuda)"
    },
    {
    Symbol: "AHL$B",
    CompanyName: "Aspen Insurance Holdings Limited Perp Pref Shs (Bermuda)"
    },
    {
    Symbol: "AHL$C",
    CompanyName: "Aspen Insurance Holdings Limited 5.95% Fixed"
    },
    {
    Symbol: "AHP",
    CompanyName: "Ashford Hospitality Prime, Inc. Common Stock"
    },
    {
    Symbol: "AHS",
    CompanyName: "AMN Healthcare Services Inc AMN Healthcare Services Inc"
    },
    {
    Symbol: "AHT",
    CompanyName: "Ashford Hospitality Trust Inc Common Stock"
    },
    {
    Symbol: "AHT$A",
    CompanyName: "Ashford Hospitality Trust Inc 8.55% Cum Preferred Series A"
    },
    {
    Symbol: "AHT$D",
    CompanyName: "Ashford Hospitality Trust Inc 8.45% Series D Cumulative Preferred Stock"
    },
    {
    Symbol: "AHT$E",
    CompanyName: "Ashford Hospitality Trust Inc 9.00% Series E Cumulative Preferred Stock"
    },
    {
    Symbol: "AI",
    CompanyName: "Arlington Asset Investment Corp Class A (new)"
    },
    {
    Symbol: "AIB",
    CompanyName: "Apollo Investment Corporation 6.625% Senior Notes due 2042"
    },
    {
    Symbol: "AIF",
    CompanyName: "Apollo Tactical Income Fund Inc. Common Stock"
    },
    {
    Symbol: "AIG",
    CompanyName: "American International Group, Inc. New Common Stock"
    },
    {
    Symbol: "AIG.W",
    CompanyName: "American International Group, Inc. Warrant expiring January 19, 2021"
    },
    {
    Symbol: "AIN",
    CompanyName: "Albany International Corporation Common Stock"
    },
    {
    Symbol: "AIR",
    CompanyName: "AAR Corp. Common Stock"
    },
    {
    Symbol: "AIT",
    CompanyName: "Applied Industrial Technologies, Inc. Common Stock"
    },
    {
    Symbol: "AIV",
    CompanyName: "Apartment Investment and Management Company Common Stock"
    },
    {
    Symbol: "AIV$A",
    CompanyName: "Apartment Investment and Management Company Preferred Series Class A"
    },
    {
    Symbol: "AIV$Z",
    CompanyName: "Apartment Investment and Management Company Class Z Cumulative Preferred Stock"
    },
    {
    Symbol: "AIW",
    CompanyName: "Arlington Asset Investment Corp 6.625% Notes due 2023"
    },
    {
    Symbol: "AIY",
    CompanyName: "Apollo Investment Corporation 6.875% Senior Notes due 2043"
    },
    {
    Symbol: "AIZ",
    CompanyName: "Assurant, Inc. Common Stock"
    },
    {
    Symbol: "AJG",
    CompanyName: "Arthur J. Gallagher & Co. Common Stock"
    },
    {
    Symbol: "AKO.A",
    CompanyName: "Embotelladora Andina S.A. Common Stock"
    },
    {
    Symbol: "AKO.B",
    CompanyName: "Embotelladora Andina S.A. Common Stock"
    },
    {
    Symbol: "AKP",
    CompanyName: "Alliance California Municipal Income Fund Inc"
    },
    {
    Symbol: "AKR",
    CompanyName: "Acadia Realty Trust Common Stock"
    },
    {
    Symbol: "AKS",
    CompanyName: "AK Steel Holding Corporation Common Stock"
    },
    {
    Symbol: "AL",
    CompanyName: "Air Lease Corporation Class A Common Stock"
    },
    {
    Symbol: "ALB",
    CompanyName: "Albemarle Corporation Common Stock"
    },
    {
    Symbol: "ALDW",
    CompanyName: "Alon USA Partners, LP Common Units representing Limited Partner Interests"
    },
    {
    Symbol: "ALE",
    CompanyName: "Allete, Inc."
    },
    {
    Symbol: "ALEX",
    CompanyName: "Alexander & Baldwin, Inc. Common Stock"
    },
    {
    Symbol: "ALG",
    CompanyName: "Alamo Group, Inc. Common Stock"
    },
    {
    Symbol: "ALJ",
    CompanyName: "Alon USA Energy, Inc. common stick"
    },
    {
    Symbol: "ALK",
    CompanyName: "Alaska Air Group, Inc. Common Stock"
    },
    {
    Symbol: "ALL",
    CompanyName: "Allstate Corporation (The) Common Stock"
    },
    {
    Symbol: "ALL$A",
    CompanyName: "Allstate Corporation (The) Dep Shs Repstg 1/1000th Perp Pfd Ser A"
    },
    {
    Symbol: "ALL$B",
    CompanyName: "Allstate Corporation (The) 5.100% Fixed"
    },
    {
    Symbol: "ALL$C",
    CompanyName: "Allstate Corporation (The) Dep Shs Repstg 1/1000th Int Shs Pfd Stk Ser C"
    },
    {
    Symbol: "ALL$D",
    CompanyName: "The Allstate Corporation Leopards Each Representing A 1/1000th Interest In A Share Of Fixed Rate Noncumulative Perpetual Preferred Stock Series D"
    },
    {
    Symbol: "ALL$E",
    CompanyName: "Allstate Corporation Depositary Shares Representing 1/1000th Perpetual Preferred Series E"
    },
    {
    Symbol: "ALL$F",
    CompanyName: "Allstate Corporation (The) Leopards Dep Shares Representing 1/1000th Perp Pfd"
    },
    {
    Symbol: "ALLE",
    CompanyName: "Allegion plc Ordinary Shares"
    },
    {
    Symbol: "ALLY",
    CompanyName: "Ally Financial Inc. Common Stock"
    },
    {
    Symbol: "ALLY$A",
    CompanyName: "GMAC Capital Trust I Fixed Rate Floating Rate Trust Preferred Securities, Series 2"
    },
    {
    Symbol: "ALLY$B",
    CompanyName: "Ally Financial Inc Fixed Rate Floating Rate Perpetual Preferred Stock, Series A"
    },
    {
    Symbol: "ALP$N",
    CompanyName: "Alabama Power Company Preferred Stock"
    },
    {
    Symbol: "ALP$O",
    CompanyName: "Alabama Power Company Preferred Stock"
    },
    {
    Symbol: "ALP$P",
    CompanyName: "Alabama Power Company 5.30% Cl A Pfd Stk"
    },
    {
    Symbol: "ALR",
    CompanyName: "Alere Inc. Common Stock"
    },
    {
    Symbol: "ALR$B",
    CompanyName: "Alere Inc. Inverness Medical Innovations, Inc. Series B Convertible Perpetual Preferred Stock"
    },
    {
    Symbol: "ALSN",
    CompanyName: "Allison Transmission Holdings, Inc. Common Stock"
    },
    {
    Symbol: "ALU",
    CompanyName: "Alcatel"
    },
    {
    Symbol: "ALV",
    CompanyName: "Autoliv, Inc. Common Stock"
    },
    {
    Symbol: "ALX",
    CompanyName: "Alexander's, Inc. Common Stock"
    },
    {
    Symbol: "AM",
    CompanyName: "Antero Midstream Partners LP Common Units representing limited partner interests"
    },
    {
    Symbol: "AMBR",
    CompanyName: "Amber Road, Inc. Common Stock"
    },
    {
    Symbol: "AMC",
    CompanyName: "AMC Entertainment Holdings, Inc. Class A Common Stock"
    },
    {
    Symbol: "AME",
    CompanyName: "AMETEK, Inc."
    },
    {
    Symbol: "AMFW",
    CompanyName: "AMEC Foster Wheeler plc American Depositary Shares"
    },
    {
    Symbol: "AMG",
    CompanyName: "Affiliated Managers Group, Inc. Common Stock"
    },
    {
    Symbol: "AMH",
    CompanyName: "American Homes 4 Rent Common Shares of Beneficial Interest"
    },
    {
    Symbol: "AMH$A",
    CompanyName: "American Homes 4 Rent Participating Preferred Shares Series A"
    },
    {
    Symbol: "AMH$B",
    CompanyName: "American Homes 4 Rent 5% Series B Participating Preferred Shares of Beneficial Interest"
    },
    {
    Symbol: "AMH$C",
    CompanyName: "American Homes 4 Rent Participating Pfd Ser C"
    },
    {
    Symbol: "AMID",
    CompanyName: "American Midstream Partners, LP Common Units representing Limited Partner Interests"
    },
    {
    Symbol: "AMP",
    CompanyName: "Ameriprise Financial, Inc. Common Stock"
    },
    {
    Symbol: "AMRC",
    CompanyName: "Ameresco, Inc. Class A Common Stock"
    },
    {
    Symbol: "AMRE",
    CompanyName: "AmREIT, Inc. Common stock"
    },
    {
    Symbol: "AMT",
    CompanyName: "American Tower Corporation (REIT) Common Stock"
    },
    {
    Symbol: "AMT$A",
    CompanyName: "American Tower Corporation (REIT) Pfd Conv Ser A"
    },
    {
    Symbol: "AMTD",
    CompanyName: "TD Ameritrade Holding Corporation Common Stock"
    },
    {
    Symbol: "AMTG",
    CompanyName: "Apollo Residential Mortgage, Inc. Common Stock"
    },
    {
    Symbol: "AMTG$A",
    CompanyName: "Apollo Residential Mortgage, Inc. Pfd Shs Series A (US)"
    },
    {
    Symbol: "AMX",
    CompanyName: "America Movil, S.A.B. de C.V. American Depository Receipt Series L"
    },
    {
    Symbol: "AN",
    CompanyName: "AutoNation, Inc. Common Stock"
    },
    {
    Symbol: "ANET",
    CompanyName: "Arista Networks, Inc. Common Stock"
    },
    {
    Symbol: "ANF",
    CompanyName: "Abercrombie & Fitch Company Common Stock"
    },
    {
    Symbol: "ANFI",
    CompanyName: "Amira Nature Foods Ltd Ordinary Shares"
    },
    {
    Symbol: "ANH",
    CompanyName: "Anworth Mortgage Asset Corporation Common Stock"
    },
    {
    Symbol: "ANH$A",
    CompanyName: "Anworth Mortgage Asset Corporation Series A Preferred Stock"
    },
    {
    Symbol: "ANH$B",
    CompanyName: "Anworth Mortgage Asset Corporation Preferred Stock Series B 6.25%"
    },
    {
    Symbol: "ANN",
    CompanyName: "ANN INC. Common Stock"
    },
    {
    Symbol: "ANR",
    CompanyName: "Alpha Natural Resources, inc. comm stock"
    },
    {
    Symbol: "ANTM",
    CompanyName: "Anthem, Inc. Common Stock"
    },
    {
    Symbol: "ANW",
    CompanyName: "Aegean Marine Petroleum Network Inc. Common Stock"
    },
    {
    Symbol: "AOD",
    CompanyName: "Alpine Total Dynamic Dividend Fund Common Stock"
    },
    {
    Symbol: "AOI",
    CompanyName: "Alliance One International, Inc. Common Stock"
    },
    {
    Symbol: "AOL",
    CompanyName: "AOL Inc. AOL Inc. Common Stock"
    },
    {
    Symbol: "AON",
    CompanyName: "Aon plc Class A Ordinary Shares (UK)"
    },
    {
    Symbol: "AOS",
    CompanyName: "A.O. Smith Corporation Common Stock"
    },
    {
    Symbol: "AP",
    CompanyName: "Ampco"
    },
    {
    Symbol: "APA",
    CompanyName: "Apache Corporation Common Stock"
    },
    {
    Symbol: "APAM",
    CompanyName: "Artisan Partners Asset Management Inc. Class A Common Stock"
    },
    {
    Symbol: "APB",
    CompanyName: "Asia Pacific Fund, Inc. (The)"
    },
    {
    Symbol: "APC",
    CompanyName: "Anadarko Petroleum Corporation Common Stock"
    },
    {
    Symbol: "APD",
    CompanyName: "Air Products and Chemicals, Inc. Common Stock"
    },
    {
    Symbol: "APF",
    CompanyName: "Morgan Stanley Asia"
    },
    {
    Symbol: "APH",
    CompanyName: "Amphenol Corporation Common Stock"
    },
    {
    Symbol: "APL",
    CompanyName: "Atlas Pipeline Partners, L.P. Common Units, No Par Value"
    },
    {
    Symbol: "APL$E",
    CompanyName: "Atlas Pipeline Partners, L.P. Cumulative Redeemable Perpetual Preferred Units Class E"
    },
    {
    Symbol: "APO",
    CompanyName: "Apollo Global Management, LLC Class A Common Shares Representing Class A Limitied Liability Company Interests"
    },
    {
    Symbol: "APU",
    CompanyName: "AmeriGas Partners, L.P. Common Stock"
    },
    {
    Symbol: "AR",
    CompanyName: "Antero Resources Corporation Common Stock"
    },
    {
    Symbol: "ARC",
    CompanyName: "ARC Document Solutions, Inc. Common Stock"
    },
    {
    Symbol: "ARCO",
    CompanyName: "Arcos Dorados Holdings Inc. Class A Shares"
    },
    {
    Symbol: "ARCX",
    CompanyName: "Arc Logistic Partners LP Common Units representing limited partner interest"
    },
    {
    Symbol: "ARDC",
    CompanyName: "Ares Dynamic Credit Allocation Fund, Inc. Common Shares"
    },
    {
    Symbol: "ARE",
    CompanyName: "Alexandria Real Estate Equities, Inc. Common Stock"
    },
    {
    Symbol: "ARE$E",
    CompanyName: "Alexandria Real Estate Equities, Inc. Pfd Ser E"
    },
    {
    Symbol: "ARES",
    CompanyName: "Ares Management L.P. Common Units representing Limited Partner Interests"
    },
    {
    Symbol: "ARG",
    CompanyName: "Airgas, Inc. Common Stock"
    },
    {
    Symbol: "ARH$C",
    CompanyName: "Arch Capital Group Ltd. 6.75% PFD sh S C"
    },
    {
    Symbol: "ARI",
    CompanyName: "Apollo Commercial Real Estate Finance, Inc"
    },
    {
    Symbol: "ARI$A",
    CompanyName: "Apollo Commercial Real Estate Finance Cumulative Redeemable Perpetual Preferred Stock Series A"
    },
    {
    Symbol: "ARL",
    CompanyName: "American Realty Investors, Inc. Common Stock"
    },
    {
    Symbol: "ARMF",
    CompanyName: "Ares Multi"
    },
    {
    Symbol: "ARMK",
    CompanyName: "Aramark Common Stock"
    },
    {
    Symbol: "ARN",
    CompanyName: "Ares Capital Corporation 7.00% Senior Notes due 2022"
    },
    {
    Symbol: "ARO",
    CompanyName: "Aeropostale Inc Common Stock"
    },
    {
    Symbol: "ARP",
    CompanyName: "Atlas Resource Partners, L.P. Common Units representing Limited Partner Interests"
    },
    {
    Symbol: "ARP$D",
    CompanyName: "Atlas Resource Partners, L.P. CUM RED PERP PDF UNIT CL D %"
    },
    {
    Symbol: "ARPI",
    CompanyName: "American Residential Properties, Inc. Common Stock"
    },
    {
    Symbol: "ARR",
    CompanyName: "ARMOUR Residential REIT, Inc."
    },
    {
    Symbol: "ARR$A",
    CompanyName: "Armour Residential REIT INC Preferred Series A"
    },
    {
    Symbol: "ARR$B",
    CompanyName: "ARMOUR Residential REIT, Inc. Preferred Series B"
    },
    {
    Symbol: "ARU",
    CompanyName: "Ares Capital Corporation 5.875% Senior Notes due 2022"
    },
    {
    Symbol: "ARW",
    CompanyName: "Arrow Electronics, Inc. Common Stock"
    },
    {
    Symbol: "ARY",
    CompanyName: "Ares Capital Corporation 7.75% Senior Notes due 2040"
    },
    {
    Symbol: "ASA",
    CompanyName: "ASA Gold and Precious Metals Limited"
    },
    {
    Symbol: "ASB",
    CompanyName: "Associated Banc"
    },
    {
    Symbol: "ASB$B",
    CompanyName: "Associated Banc"
    },
    {
    Symbol: "ASC",
    CompanyName: "Ardmore Shipping Corporation Common Stock"
    },
    {
    Symbol: "ASG",
    CompanyName: "Liberty All"
    },
    {
    Symbol: "ASGN",
    CompanyName: "On Assignment, Inc. Common Stock"
    },
    {
    Symbol: "ASH",
    CompanyName: "Ashland Inc. (NEW) Common Stock"
    },
    {
    Symbol: "ASPN",
    CompanyName: "Aspen Aerogels, Inc. Common Stock"
    },
    {
    Symbol: "ASR",
    CompanyName: "Grupo Aeroportuario del Sureste, S.A. de C.V. Common Stock"
    },
    {
    Symbol: "ASX",
    CompanyName: "Advanced Semiconductor Engineering, Inc. Common Stock"
    },
    {
    Symbol: "AT",
    CompanyName: "Atlantic Power Corporation Ordinary Shares (Canada)"
    },
    {
    Symbol: "ATE",
    CompanyName: "Advantest Corporation (Kabushiki Kaisha Advantest) ADS American Depositary Shares"
    },
    {
    Symbol: "ATEN",
    CompanyName: "A10 Networks, Inc. Common Stock"
    },
    {
    Symbol: "ATHM",
    CompanyName: "Autohome Inc. American Depositary Shares, each representing one class A ordinary share."
    },
    {
    Symbol: "ATI",
    CompanyName: "Allegheny Technologies Incorporated Common Stock"
    },
    {
    Symbol: "ATK",
    CompanyName: "Alliant Techsystems Inc. Common Stock"
    },
    {
    Symbol: "ATLS",
    CompanyName: "Atlas Energy, L.P. Common Units"
    },
    {
    Symbol: "ATO",
    CompanyName: "Atmos Energy Corporation Common Stock"
    },
    {
    Symbol: "ATR",
    CompanyName: "AptarGroup, Inc. Common Stock"
    },
    {
    Symbol: "ATTO",
    CompanyName: "Atento S.A. Ordinary Shares"
    },
    {
    Symbol: "ATU",
    CompanyName: "Actuant Corporation Common Stock"
    },
    {
    Symbol: "ATV",
    CompanyName: "Acorn International, Inc. ADS"
    },
    {
    Symbol: "ATW",
    CompanyName: "Atwood Oceanics, Inc. Common Stock"
    },
    {
    Symbol: "AU",
    CompanyName: "AngloGold Ashanti Limited Common Stock"
    },
    {
    Symbol: "AUO",
    CompanyName: "AU Optronics Corp American Depositary Shares"
    },
    {
    Symbol: "AUQ",
    CompanyName: "AuRico Gold Inc. Ordinary Shares"
    },
    {
    Symbol: "AUY",
    CompanyName: "Yamana Gold Inc. Ordinary Shares (Canada)"
    },
    {
    Symbol: "AV",
    CompanyName: "Aviva plc Unsponsored ADR (UK)"
    },
    {
    Symbol: "AVA",
    CompanyName: "Avista Corporation Common Stock"
    },
    {
    Symbol: "AVAL",
    CompanyName: "Grupo Aval Acciones y Valores S.A. ADR (Each representing 20 preferred shares)"
    },
    {
    Symbol: "AVB",
    CompanyName: "AvalonBay Communities, Inc. Common Stock"
    },
    {
    Symbol: "AVD",
    CompanyName: "American Vanguard Corporation Common Stock ($0.10 Par Value)"
    },
    {
    Symbol: "AVG",
    CompanyName: "AVG Technologies N.V. Ordinary Shares"
    },
    {
    Symbol: "AVH",
    CompanyName: "Avianca Holdings S.A. American Depositary Shares (Each representing 8 preferred Shares)"
    },
    {
    Symbol: "AVIV",
    CompanyName: "Aviv REIT, Inc. Common Stock"
    },
    {
    Symbol: "AVK",
    CompanyName: "Advent Claymore Convertible Securities and Income Fund"
    },
    {
    Symbol: "AVOL",
    CompanyName: "Avolon Holdings Limited Common Shares"
    },
    {
    Symbol: "AVP",
    CompanyName: "Avon Products, Inc. Common Stock"
    },
    {
    Symbol: "AVT",
    CompanyName: "Avnet, Inc. Common Stock"
    },
    {
    Symbol: "AVV",
    CompanyName: "Aviva plc Subordinated Capital Securities due 2041"
    },
    {
    Symbol: "AVX",
    CompanyName: "AVX Corporation Common Stock"
    },
    {
    Symbol: "AVY",
    CompanyName: "Avery Dennison Corporation Common Stock"
    },
    {
    Symbol: "AWF",
    CompanyName: "Alliancebernstein Global High Income Fund"
    },
    {
    Symbol: "AWH",
    CompanyName: "Allied World Assurance Company Holdings, AG (Switzerland)"
    },
    {
    Symbol: "AWI",
    CompanyName: "Armstrong World Industries Inc Common Stock"
    },
    {
    Symbol: "AWK",
    CompanyName: "American Water Works Company, Inc. Common Stock"
    },
    {
    Symbol: "AWP",
    CompanyName: "Alpine Global Premier Properties Fund Alpine Global Premier Properties Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "AWR",
    CompanyName: "American States Water Company Common Stock"
    },
    {
    Symbol: "AXE",
    CompanyName: "Anixter International Inc. Common Stock"
    },
    {
    Symbol: "AXL",
    CompanyName: "American Axle & Manufacturing Holdings, Inc. Common Stock"
    },
    {
    Symbol: "AXLL",
    CompanyName: "Axiall Corporation Common Stock"
    },
    {
    Symbol: "AXP",
    CompanyName: "American Express Company Common Stock"
    },
    {
    Symbol: "AXR",
    CompanyName: "AMREP Corporation Common Stock"
    },
    {
    Symbol: "AXS",
    CompanyName: "Axis Capital Holdings Limited Common Stock"
    },
    {
    Symbol: "AXS$C",
    CompanyName: "Axis Capital Holdings Limited Preferred Series C (Bermuda)"
    },
    {
    Symbol: "AXS$D",
    CompanyName: "Axis Capital Holdings Limited Preferred Series D (Bermuda)"
    },
    {
    Symbol: "AXTA",
    CompanyName: "Axalta Coating Systems Ltd. Common Shares"
    },
    {
    Symbol: "AYI",
    CompanyName: "Acuity Brands Inc (Holding Company)"
    },
    {
    Symbol: "AYN",
    CompanyName: "Alliance New York Municipal Income Fund Inc"
    },
    {
    Symbol: "AYR",
    CompanyName: "Aircastle Limited Common Stock"
    },
    {
    Symbol: "AZN",
    CompanyName: "Astrazeneca PLC Common Stock"
    },
    {
    Symbol: "AZO",
    CompanyName: "AutoZone, Inc. Common Stock"
    },
    {
    Symbol: "AZZ",
    CompanyName: "AZZ Incorporated Common Stock"
    },
    {
    Symbol: "B",
    CompanyName: "Barnes Group, Inc. Common Stock"
    },
    {
    Symbol: "BA",
    CompanyName: "Boeing Company (The) Common Stock"
    },
    {
    Symbol: "BABA",
    CompanyName: "Alibaba Group Holding Limited American Depositary Shares each representing one Ordinary share"
    },
    {
    Symbol: "BAC",
    CompanyName: "Bank of America Corporation Common Stock"
    },
    {
    Symbol: "BAC$D",
    CompanyName: "Bank of America Corporation Depositary Shares Rpstg 1/1000th Interest in Sh of Non Cum Pfd Stk Ser D"
    },
    {
    Symbol: "BAC$E",
    CompanyName: "Bank of America Corporation Depositary Sh repstg 1/1000th Perp Pfd Ser E"
    },
    {
    Symbol: "BAC$I",
    CompanyName: "Bank Amer Corp Dep Sh Repstg 1/1000th Pfd Ser I"
    },
    {
    Symbol: "BAC$L",
    CompanyName: "Bank of America Corporation Non Cumulative Perpetual Conv Pfd Ser L"
    },
    {
    Symbol: "BAC$W",
    CompanyName: "Bank of America Corporation Depository Shares Representing 1/1000th Preferred Series W"
    },
    {
    Symbol: "BAC$Z",
    CompanyName: "Bank of America Corporation BAC Capital Trust VIII 6% Capital Securities"
    },
    {
    Symbol: "BAC.A",
    CompanyName: "Bank of America Corporation Class A Warrant expiring January 16, 2019"
    },
    {
    Symbol: "BAC.B",
    CompanyName: "Bank of America Corporation Class B Warrants expiring 10/28/2018"
    },
    {
    Symbol: "BAF",
    CompanyName: "BlackRock Municipal Income Investment Quality Trust"
    },
    {
    Symbol: "BAH",
    CompanyName: "Booz Allen Hamilton Holding Corporation Common Stock"
    },
    {
    Symbol: "BAK",
    CompanyName: "Braskem SA ADR"
    },
    {
    Symbol: "BALT",
    CompanyName: "Baltic Trading Limited Common Stock"
    },
    {
    Symbol: "BAM",
    CompanyName: "Brookfield Asset Management Inc. Common Stock"
    },
    {
    Symbol: "BANC",
    CompanyName: "Banc of California, Inc. Common Stock"
    },
    {
    Symbol: "BANC$C",
    CompanyName: "Banc of California, Inc. Depositary Shares"
    },
    {
    Symbol: "BAP",
    CompanyName: "Credicorp Ltd. Common Stock"
    },
    {
    Symbol: "BAS",
    CompanyName: "Basic Energy Services, Inc. Common Stock"
    },
    {
    Symbol: "BAX",
    CompanyName: "Baxter International Inc. Common Stock"
    },
    {
    Symbol: "BBD",
    CompanyName: "Banco Bradesco Sa American Depositary Shares"
    },
    {
    Symbol: "BBDO",
    CompanyName: "Banco Bradesco Sa American Depositary Shares (each representing one Common Share)"
    },
    {
    Symbol: "BBF",
    CompanyName: "BlackRock Municipal Income Investment Trust"
    },
    {
    Symbol: "BBG",
    CompanyName: "Bill Barrett Corporation Common Stock"
    },
    {
    Symbol: "BBK",
    CompanyName: "Blackrock Municipal Bond Trust"
    },
    {
    Symbol: "BBL",
    CompanyName: "BHP Billiton plc Sponsored ADR"
    },
    {
    Symbol: "BBN",
    CompanyName: "BlackRock Build America Bond Trust Common Shares of Beneficial Interest"
    },
    {
    Symbol: "BBT",
    CompanyName: "BB&T Corporation Common Stock"
    },
    {
    Symbol: "BBT$D",
    CompanyName: "BB&T Corporation Depositary Shares Representing 1/1000th Perpetual Preferred Series D"
    },
    {
    Symbol: "BBT$E",
    CompanyName: "BB&T Corporation Depositary Shares Representing 1/1000th Perpetual Preferred Series E"
    },
    {
    Symbol: "BBT$F",
    CompanyName: "BB&T Corporation Depositary Shares Representing 1/1000th Interest Series F Perpetual Preferred"
    },
    {
    Symbol: "BBT$G",
    CompanyName: "BB&T Corporation Depositary Shares Representing 1/1000th Perpetual Preferred Series G"
    },
    {
    Symbol: "BBVA",
    CompanyName: "Banco Bilbao Vizcaya Argentaria S.A. Common Stock"
    },
    {
    Symbol: "BBW",
    CompanyName: "Build"
    },
    {
    Symbol: "BBX",
    CompanyName: "BBX Capital Corporation Common Stock"
    },
    {
    Symbol: "BBY",
    CompanyName: "Best Buy Co., Inc. Common Stock"
    },
    {
    Symbol: "BC",
    CompanyName: "Brunswick Corporation Common Stock"
    },
    {
    Symbol: "BCA",
    CompanyName: "Corpbanca Sponsored Reg S GDR representing Common (Chile)"
    },
    {
    Symbol: "BCC",
    CompanyName: "Boise Cascade, L.L.C. Common Stock"
    },
    {
    Symbol: "BCE",
    CompanyName: "BCE, Inc. Common Stock"
    },
    {
    Symbol: "BCEI",
    CompanyName: "Bonanza Creek Energy, Inc. Common Stock"
    },
    {
    Symbol: "BCH",
    CompanyName: "Banco De Chile Banco De Chile ADS"
    },
    {
    Symbol: "BCO",
    CompanyName: "Brinks Company (The) Common Stock"
    },
    {
    Symbol: "BCR",
    CompanyName: "C.R. Bard, Inc. Common Stock"
    },
    {
    Symbol: "BCRH",
    CompanyName: "Blue Capital Reinsurance Holdings Ltd. Common Shares"
    },
    {
    Symbol: "BCS",
    CompanyName: "Barclays PLC Common Stock"
    },
    {
    Symbol: "BCS$",
    CompanyName: "Barclays Bank PLC ADR Ser 2 repstg Pref Shs Ser 2 (United Kingdom)"
    },
    {
    Symbol: "BCS$A",
    CompanyName: "Barclays PLC ADS"
    },
    {
    Symbol: "BCS$C",
    CompanyName: "Barclays PLC American Depositary Shares Series 4"
    },
    {
    Symbol: "BCS$D",
    CompanyName: "Barclays PLC American Depositary Shares (Each representing Non"
    },
    {
    Symbol: "BCX",
    CompanyName: "BlackRock Resources Common Shares of Beneficial Interest"
    },
    {
    Symbol: "BDC",
    CompanyName: "Belden Inc Common Stock"
    },
    {
    Symbol: "BDJ",
    CompanyName: "Blackrock Enhanced Equity Dividend Trust"
    },
    {
    Symbol: "BDN",
    CompanyName: "Brandywine Realty Trust Common Stock"
    },
    {
    Symbol: "BDN$E",
    CompanyName: "Brandywine Realty Tr Pfd Shs Ben Int Ser E"
    },
    {
    Symbol: "BDX",
    CompanyName: "Becton, Dickinson and Company Common Stock"
    },
    {
    Symbol: "BEE",
    CompanyName: "Strategic Hotels & Resorts Inc Common Stock"
    },
    {
    Symbol: "BEL",
    CompanyName: "Belmond Ltd. Class A Common Stock"
    },
    {
    Symbol: "BEN",
    CompanyName: "Franklin Resources, Inc. Common Stock"
    },
    {
    Symbol: "BEP",
    CompanyName: "Brookfield Renewable Energy Partners LP Partnership Units (Bermuda)"
    },
    {
    Symbol: "BERY",
    CompanyName: "Berry Plastics Group, Inc. Common Stock"
    },
    {
    Symbol: "BF.A",
    CompanyName: "Brown Forman Inc Class A Common Stock"
    },
    {
    Symbol: "BF.B",
    CompanyName: "Brown Forman Inc Class B Common Stock"
    },
    {
    Symbol: "BFAM",
    CompanyName: "Bright Horizons Family Solutions Inc. Common Stock"
    },
    {
    Symbol: "BFK",
    CompanyName: "BlackRock Municipal Income Trust"
    },
    {
    Symbol: "BFO",
    CompanyName: "Blackrock Florida Municipal 2020 Term Trust"
    },
    {
    Symbol: "BFR",
    CompanyName: "BBVA Banco Frances S.A. Common Stock"
    },
    {
    Symbol: "BFS",
    CompanyName: "Saul Centers, Inc. Common Stock"
    },
    {
    Symbol: "BFS$C",
    CompanyName: "Saul Centers, Inc. Depositary Shares, each representing 1/100th of a share of 6.875% Series C Cumulative Redeemable Preferred Stock, $0.01 par value"
    },
    {
    Symbol: "BFZ",
    CompanyName: "BlackRock California Municipal Income Trust"
    },
    {
    Symbol: "BG",
    CompanyName: "Bunge Limited Bunge Limited"
    },
    {
    Symbol: "BGB",
    CompanyName: "Blackstone / GSO Strategic Credit Fund Common Shares"
    },
    {
    Symbol: "BGC",
    CompanyName: "General Cable Corporation Common Stock"
    },
    {
    Symbol: "BGCA",
    CompanyName: "BGC Partners, Inc. 8.125% Senior Notes due 2042"
    },
    {
    Symbol: "BGE$B",
    CompanyName: "Bge Cap Trust II 6.20% Trust Preferred Securities"
    },
    {
    Symbol: "BGG",
    CompanyName: "Briggs & Stratton Corporation Common Stock"
    },
    {
    Symbol: "BGH",
    CompanyName: "Babson Capital Global Short Duration High Yield Fund Common Shares of Beneficial Interests"
    },
    {
    Symbol: "BGR",
    CompanyName: "BlackRock Energy and Resources Trust"
    },
    {
    Symbol: "BGS",
    CompanyName: "B&G Foods, Inc. B&G Foods, Inc. Common Stock"
    },
    {
    Symbol: "BGT",
    CompanyName: "BlackRock Floating Rate Income Trust"
    },
    {
    Symbol: "BGX",
    CompanyName: "Blackstone GSO Long Short Credit Income Fund Common Shares"
    },
    {
    Symbol: "BGY",
    CompanyName: "BLACKROCK INTERNATIONAL, LTD. Blackrock International Real Estate Fund, Inc."
    },
    {
    Symbol: "BH",
    CompanyName: "Biglari Holdings Inc."
    },
    {
    Symbol: "BHE",
    CompanyName: "Benchmark Electronics, Inc. Common Stock"
    },
    {
    Symbol: "BHI",
    CompanyName: "Baker Hughes Incorporated Common Stock"
    },
    {
    Symbol: "BHK",
    CompanyName: "Blackrock Core Bond Trust Blackrock Core Bond Trust"
    },
    {
    Symbol: "BHL",
    CompanyName: "Blackrock Defined Opportunity Credit Trust Blackrock Defined Opportunity Credit Trust"
    },
    {
    Symbol: "BHLB",
    CompanyName: "Berkshire Hills Bancorp, Inc. Common Stock"
    },
    {
    Symbol: "BHP",
    CompanyName: "BHP Billiton Limited Common Stock"
    },
    {
    Symbol: "BID",
    CompanyName: "Sotheby's Common Stock"
    },
    {
    Symbol: "BIE",
    CompanyName: "BlackRock Municipal Bond Investment Trust"
    },
    {
    Symbol: "BIF",
    CompanyName: "Boulder Growth & Income Fund, Inc."
    },
    {
    Symbol: "BIG",
    CompanyName: "Big Lots, Inc. Common Stock"
    },
    {
    Symbol: "BIN",
    CompanyName: "Progressive Waste Solutions Ltd. Common Shares"
    },
    {
    Symbol: "BIO",
    CompanyName: "Bio"
    },
    {
    Symbol: "BIO.B",
    CompanyName: "Bio"
    },
    {
    Symbol: "BIOA",
    CompanyName: "BioAmber Inc. Common Stock"
    },
    {
    Symbol: "BIOA.W",
    CompanyName: "BioAmber Inc. Warrant, expiring May 9, 2017"
    },
    {
    Symbol: "BIP",
    CompanyName: "Brookfield Infrastructure Partners LP Limited Partnership Units"
    },
    {
    Symbol: "BIT",
    CompanyName: "BlackRock Multi"
    },
    {
    Symbol: "BITA",
    CompanyName: "Bitauto Holdings Limited American Depositary Shares (each representing one ordinary share)"
    },
    {
    Symbol: "BJZ",
    CompanyName: "Blackrock California Municipal 2018 Term Trust Blackrock California Municipal 2018 Term Trust"
    },
    {
    Symbol: "BK",
    CompanyName: "Bank of New York Mellon Corporation (The) Common Stock"
    },
    {
    Symbol: "BK$C",
    CompanyName: "Bank Of New York Mellon Corporation (The) Dep Shs Repstg 1/4000th Perp Pfd Ser C"
    },
    {
    Symbol: "BKD",
    CompanyName: "Brookdale Senior Living Inc. Common Stock"
    },
    {
    Symbol: "BKE",
    CompanyName: "Buckle, Inc. (The) Common Stock"
    },
    {
    Symbol: "BKH",
    CompanyName: "Black Hills Corporation Common Stock"
    },
    {
    Symbol: "BKK",
    CompanyName: "Blackrock Municipal 2020 Term Trust"
    },
    {
    Symbol: "BKN",
    CompanyName: "BlackRock Investment Quality Municipal Trust Inc. (The)"
    },
    {
    Symbol: "BKS",
    CompanyName: "Barnes & Noble, Inc. Common Stock"
    },
    {
    Symbol: "BKT",
    CompanyName: "BlackRock Income Trust Inc. (The)"
    },
    {
    Symbol: "BKU",
    CompanyName: "BankUnited, Inc. Common Stock"
    },
    {
    Symbol: "BLH",
    CompanyName: "Blackrock New York Municipal 2018 Term Trust"
    },
    {
    Symbol: "BLK",
    CompanyName: "BlackRock, Inc. Common Stock"
    },
    {
    Symbol: "BLL",
    CompanyName: "Ball Corporation Common Stock"
    },
    {
    Symbol: "BLOX",
    CompanyName: "Infoblox Inc. Common Stock"
    },
    {
    Symbol: "BLT",
    CompanyName: "Blount International, Inc. Common Stock"
    },
    {
    Symbol: "BLW",
    CompanyName: "Blackrock Limited Duration Income Trust"
    },
    {
    Symbol: "BLX",
    CompanyName: "Banco Latinoamericano de Comercio Exterior, S.A."
    },
    {
    Symbol: "BMA",
    CompanyName: "Banco Macro S.A. ADR (representing Ten Class B Common Shares)"
    },
    {
    Symbol: "BME",
    CompanyName: "Blackrock Health Sciences Trust"
    },
    {
    Symbol: "BMI",
    CompanyName: "Badger Meter, Inc. Common Stock"
    },
    {
    Symbol: "BML$G",
    CompanyName: "Bank of America Corporation Bank of America Corporation Depositary Shares (Each representing a 1/1200th interest in a share of Floating Rate Non"
    },
    {
    Symbol: "BML$H",
    CompanyName: "Bank of America Corporation Bank of America Corporation Depositary Shares (Each representing a 1/1200th interest in a Share of Floating Rate Non"
    },
    {
    Symbol: "BML$I",
    CompanyName: "Bank of America Corporation Bank of America Corporation Depositary Shares (Each representing a 1/1200th interest in a Share of 6.375% Non"
    },
    {
    Symbol: "BML$J",
    CompanyName: "Bank of America Corporation Bank of America Corporation Depositary Shares (Each representing a 1/1200th interest in a Share of Floating Rate Non"
    },
    {
    Symbol: "BML$L",
    CompanyName: "Bank of America Corporation Bank of America Corporation Depositary Shares (Each representing a 1/1200th Interest in a Share of Floating Rate Non"
    },
    {
    Symbol: "BMO",
    CompanyName: "Bank Of Montreal Common Stock"
    },
    {
    Symbol: "BMR",
    CompanyName: "Biomed Realty Trust Common Stock"
    },
    {
    Symbol: "BMS",
    CompanyName: "Bemis Company, Inc. Common Stock"
    },
    {
    Symbol: "BMY",
    CompanyName: "Bristol"
    },
    {
    Symbol: "BNJ",
    CompanyName: "BlackRock New Jersey Municipal Income Trust"
    },
    {
    Symbol: "BNK",
    CompanyName: "C1 Financial, Inc. Common Stock"
    },
    {
    Symbol: "BNS",
    CompanyName: "Bank Nova Scotia Halifax Pfd 3 Ordinary Shares"
    },
    {
    Symbol: "BNY",
    CompanyName: "BlackRock New York Municipal Income Trust"
    },
    {
    Symbol: "BOCA",
    CompanyName: "Banc of California, Inc. Senior Note due 4/15/2020"
    },
    {
    Symbol: "BOE",
    CompanyName: "Blackrock Global Blackrock Global Opportunities Equity Trust Common Shares of Beneficial Interest"
    },
    {
    Symbol: "BOH",
    CompanyName: "Bank of Hawaii Corporation Common Stock"
    },
    {
    Symbol: "BOI",
    CompanyName: "Brookfield Mortgage Opportunity Income Fund Inc. Common Stock"
    },
    {
    Symbol: "BOOT",
    CompanyName: "Boot Barn Holdings, Inc. Common Stock"
    },
    {
    Symbol: "BORN",
    CompanyName: "China New Borun Corporation American Depositary Shares"
    },
    {
    Symbol: "BOXC",
    CompanyName: "Brookfield Canada Office Properties"
    },
    {
    Symbol: "BP",
    CompanyName: "BP p.l.c. Common Stock"
    },
    {
    Symbol: "BPI",
    CompanyName: "Bridgepoint Education, Inc."
    },
    {
    Symbol: "BPK",
    CompanyName: "Blackrock Municipal 2018 Term Trust Blackrock Municipal 2018 Term Trust"
    },
    {
    Symbol: "BPL",
    CompanyName: "Buckeye Partners L.P. Common Stock"
    },
    {
    Symbol: "BPT",
    CompanyName: "BP Prudhoe Bay Royalty Trust Common Stock"
    },
    {
    Symbol: "BPY",
    CompanyName: "Brookfield Property Partners L.P. Limited Partnership Units"
    },
    {
    Symbol: "BPZ",
    CompanyName: "BPZ Resources, Inc Common Stock"
    },
    {
    Symbol: "BQH",
    CompanyName: "Blackrock New York Municipal Bond Trust Common Shares of Beneficial Interest"
    },
    {
    Symbol: "BR",
    CompanyName: "Broadridge Financial Solutions, Inc.Common Stock"
    },
    {
    Symbol: "BRC",
    CompanyName: "Brady Corporation Common Stock"
    },
    {
    Symbol: "BRFS",
    CompanyName: "BRF S.A."
    },
    {
    Symbol: "BRK.A",
    CompanyName: "Berkshire Hathaway Inc. Common Stock"
    },
    {
    Symbol: "BRK.B",
    CompanyName: "Berkshire Hathaway Inc. New Common Stock"
    },
    {
    Symbol: "BRO",
    CompanyName: "Brown & Brown, Inc. Common Stock"
    },
    {
    Symbol: "BRP",
    CompanyName: "Brookfield Residential Properties Inc. Common Stock"
    },
    {
    Symbol: "BRS",
    CompanyName: "Bristow Group Inc. Common Stock"
    },
    {
    Symbol: "BRSS",
    CompanyName: "Global Brass and Copper Holdings, Inc. Common Stock"
    },
    {
    Symbol: "BRT",
    CompanyName: "BRT Realty Trust Common Stock"
    },
    {
    Symbol: "BRX",
    CompanyName: "Brixmor Property Group Inc. Common Stock"
    },
    {
    Symbol: "BSAC",
    CompanyName: "Banco Santander"
    },
    {
    Symbol: "BSBR",
    CompanyName: "Banco Santander Brasil SA American Depositary Shares, each representing one unit"
    },
    {
    Symbol: "BSD",
    CompanyName: "BlackRock Strategic Municipal Trust Inc. (The) Common Stock"
    },
    {
    Symbol: "BSE",
    CompanyName: "Blackrock New York Municipal Income Quality Trust Common Shares of Beneficial Interest"
    },
    {
    Symbol: "BSI",
    CompanyName: "Alon Blue Square Israel Ltd."
    },
    {
    Symbol: "BSL",
    CompanyName: "Blackstone GSO Senior Floating Rate Term Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "BSMX",
    CompanyName: "Grupo Financiero Santander Mexico S.A. B. de C.V. American Depositary Shares, each representing five Series B shares"
    },
    {
    Symbol: "BST",
    CompanyName: "BlackRock Science and Technology Trust Common Shares of Beneficial Interest"
    },
    {
    Symbol: "BSX",
    CompanyName: "Boston Scientific Corporation Common Stock"
    },
    {
    Symbol: "BT",
    CompanyName: "BT Group plc Common Stock"
    },
    {
    Symbol: "BTA",
    CompanyName: "BlackRock Long"
    },
    {
    Symbol: "BTE",
    CompanyName: "Baytex Energy Corp"
    },
    {
    Symbol: "BTF",
    CompanyName: "Boulder Total Return Fund, Inc. Common Stock"
    },
    {
    Symbol: "BTH",
    CompanyName: "Blyth, Inc. New Common Stock"
    },
    {
    Symbol: "BTO",
    CompanyName: "John Hancock Financial Opportunities Fund Common Stock"
    },
    {
    Symbol: "BTT",
    CompanyName: "BlackRock Municipal Target Term Trust Inc. (The) Common Shares of Beneficial Interest"
    },
    {
    Symbol: "BTU",
    CompanyName: "Peabody Energy Corporation Common Stock"
    },
    {
    Symbol: "BTZ",
    CompanyName: "BlackRock Credit Allocation Income Trust"
    },
    {
    Symbol: "BUD",
    CompanyName: "Anheuser"
    },
    {
    Symbol: "BUI",
    CompanyName: "BlackRock Utility and Infrastructure Trust Common Shares of Beneficial Interest"
    },
    {
    Symbol: "BURL",
    CompanyName: "Burlington Stores, Inc. Common Stock"
    },
    {
    Symbol: "BVN",
    CompanyName: "Buenaventura Mining Company Inc."
    },
    {
    Symbol: "BWA",
    CompanyName: "BorgWarner Inc. Common Stock"
    },
    {
    Symbol: "BWC",
    CompanyName: "Babcock Common Stock"
    },
    {
    Symbol: "BWG",
    CompanyName: "Legg Mason BW Global Income Opportunities Fund Inc. Common Stock"
    },
    {
    Symbol: "BWP",
    CompanyName: "Boardwalk Pipeline Partners LP Common Units"
    },
    {
    Symbol: "BWS",
    CompanyName: "Brown Shoe Company, Inc. Common Stock"
    },
    {
    Symbol: "BX",
    CompanyName: "The Blackstone Group L.P. Common Units Representing Limited Partnership Interests"
    },
    {
    Symbol: "BXC",
    CompanyName: "Bluelinx Holdings Inc. Common Stock"
    },
    {
    Symbol: "BXE",
    CompanyName: "Bellatrix Exploration Ltd Ordinary Shares (Canada)"
    },
    {
    Symbol: "BXMT",
    CompanyName: "Blackstone Mortgage Trust, Inc. Common Stock"
    },
    {
    Symbol: "BXMX",
    CompanyName: "Nuveen S&P 500 Buy"
    },
    {
    Symbol: "BXP",
    CompanyName: "Boston Properties, Inc. Common Stock"
    },
    {
    Symbol: "BXP$B",
    CompanyName: "Boston Properties, Inc. Depositary Shares, each representing 1/100th of a share of the Issuer's 5.25% Sockeries B Cumulative Redeemable Preferred St"
    },
    {
    Symbol: "BXS",
    CompanyName: "BancorpSouth, Inc. Common Stock"
    },
    {
    Symbol: "BYD",
    CompanyName: "Boyd Gaming Corporation Common Stock"
    },
    {
    Symbol: "BYM",
    CompanyName: "Blackrock Municipal Income Quality Trust Common Shares of Beneficial Interest"
    },
    {
    Symbol: "BZH",
    CompanyName: "Beazer Homes USA, Inc. Common Stock"
    },
    {
    Symbol: "BZT",
    CompanyName: "Beazer Homes USA, Inc. Tangible Equity Unit"
    },
    {
    Symbol: "C",
    CompanyName: "Citigroup, Inc. Common Stock"
    },
    {
    Symbol: "C$C",
    CompanyName: "Citigroup Inc. Depositary Shares representing 1/1000 Series C Noncumulative Preferred Stock (United States)"
    },
    {
    Symbol: "C$J",
    CompanyName: "Citigroup Inc. Dep Shs Repstg 1/1000 Pfd Ser J Fixed/Fltg"
    },
    {
    Symbol: "C$K",
    CompanyName: "Citigroup Inc. Dep Shs Repstg 1/1000th Pfd Ser K"
    },
    {
    Symbol: "C$L",
    CompanyName: "Citigroup Inc. Depositary Share representing 1/1000 interest in a share of noncumulative series L"
    },
    {
    Symbol: "C$N",
    CompanyName: "Citigroup Capital VIII 7.875% Fixed rate Floating Rate trust Preferred Securities (TruPS)"
    },
    {
    Symbol: "C$P",
    CompanyName: "Citigroup Inc. Dep Shs Repstg 1/1000th Pfd Ser AA"
    },
    {
    Symbol: "C.A",
    CompanyName: "Citigroup Inc. Warrants Class A expiring January 4, 2019"
    },
    {
    Symbol: "C.B",
    CompanyName: "Citigroup Inc. Class B Warant expiring October 28, 2018"
    },
    {
    Symbol: "CAB",
    CompanyName: "Cabela's Inc Class A Common Stock"
    },
    {
    Symbol: "CACI",
    CompanyName: "CACI International, Inc. Class A Common Stock"
    },
    {
    Symbol: "CAE",
    CompanyName: "CAE Inc. Ordinary Shares"
    },
    {
    Symbol: "CAF",
    CompanyName: "Morgan Stanley China A Share Fund Inc. Common Stock"
    },
    {
    Symbol: "CAG",
    CompanyName: "ConAgra Foods, Inc. Common Stock"
    },
    {
    Symbol: "CAH",
    CompanyName: "Cardinal Health, Inc. Common Stock"
    },
    {
    Symbol: "CAJ",
    CompanyName: "Canon, Inc. American Depositary Shares"
    },
    {
    Symbol: "CALX",
    CompanyName: "Calix, Inc Common Stock"
    },
    {
    Symbol: "CAM",
    CompanyName: "Cameron International Corporation Common Stock"
    },
    {
    Symbol: "CAP",
    CompanyName: "Cai International, Inc. Common Stock"
    },
    {
    Symbol: "CAPL",
    CompanyName: "CrossAmerica Partners LP Common Units representing limited partner interests"
    },
    {
    Symbol: "CAS",
    CompanyName: "Castle (A.M.) & Co. Common Stock"
    },
    {
    Symbol: "CAT",
    CompanyName: "Caterpillar, Inc. Common Stock"
    },
    {
    Symbol: "CATO",
    CompanyName: "Cato Corporation (The) Class A Common Stock"
    },
    {
    Symbol: "CB",
    CompanyName: "Chubb Corporation (The) Common Stock"
    },
    {
    Symbol: "CBA",
    CompanyName: "ClearBridge American Energy MLP Fund Inc. Common Stock"
    },
    {
    Symbol: "CBB",
    CompanyName: "Cincinnati Bell Inc. Common Stock"
    },
    {
    Symbol: "CBB$B",
    CompanyName: "Cincinnati Bell Inc. Preferred Stock"
    },
    {
    Symbol: "CBD",
    CompanyName: "Companhia Brasileira de Distribuicao ADS"
    },
    {
    Symbol: "CBG",
    CompanyName: "CBRE Group Inc Common Stock Class A"
    },
    {
    Symbol: "CBI",
    CompanyName: "Chicago Bridge & Iron Company N.V. Common Stock"
    },
    {
    Symbol: "CBK",
    CompanyName: "Christopher & Banks Corporation Common Stock"
    },
    {
    Symbol: "CBL",
    CompanyName: "CBL & Associates Properties, Inc. Common Stock"
    },
    {
    Symbol: "CBL$D",
    CompanyName: "CBL & Associates Properties, Inc. Dep Shares Repstg 1/10th Preferred Series D"
    },
    {
    Symbol: "CBL$E",
    CompanyName: "CBL & Associates Properties, Inc. Depositary Shs Repstg 1/10 6.625% Ser E Cum Redeemable (Pfd Stk)"
    },
    {
    Symbol: "CBM",
    CompanyName: "Cambrex Corporation Common Stock"
    },
    {
    Symbol: "CBPX",
    CompanyName: "Continental Building Products, Inc. Common Stock"
    },
    {
    Symbol: "CBR",
    CompanyName: "Ciber, Inc. Common Stock"
    },
    {
    Symbol: "CBS",
    CompanyName: "CBS Corporation Class B Common Stock"
    },
    {
    Symbol: "CBS.A",
    CompanyName: "CBS Corporation CBS Corporation Class A Common Stock"
    },
    {
    Symbol: "CBT",
    CompanyName: "Cabot Corporation Common Stock"
    },
    {
    Symbol: "CBU",
    CompanyName: "Community Bank System, Inc. Common Stock"
    },
    {
    Symbol: "CBZ",
    CompanyName: "CBIZ, Inc. Common Stock"
    },
    {
    Symbol: "CCC",
    CompanyName: "Calgon Carbon Corporation Common Stock"
    },
    {
    Symbol: "CCE",
    CompanyName: "Coca"
    },
    {
    Symbol: "CCG",
    CompanyName: "Campus Crest Communities, Inc. Common Stock"
    },
    {
    Symbol: "CCG$A",
    CompanyName: "Campus Crest Communities, Inc. 8.00% Series A Cumulative Redeemable Preferred Stock"
    },
    {
    Symbol: "CCI",
    CompanyName: "Crown Castle International Corp. (REIT) Common Stock"
    },
    {
    Symbol: "CCI$A",
    CompanyName: "Crown Castle International Corp. (REIT) Mandatory Conv Pfd Stk Series A"
    },
    {
    Symbol: "CCJ",
    CompanyName: "Cameco Corporation Common Stock"
    },
    {
    Symbol: "CCK",
    CompanyName: "Crown Holdings, Inc."
    },
    {
    Symbol: "CCL",
    CompanyName: "Carnival Corporation Common Stock"
    },
    {
    Symbol: "CCM",
    CompanyName: "Concord Medical Services Holdings Limited ADS (Each represents three ordinary shares)"
    },
    {
    Symbol: "CCO",
    CompanyName: "Clear Channel Outdoor Holdings, Inc. Clear Channel Outdoor Holdings, Inc. Class A Common Stock"
    },
    {
    Symbol: "CCS",
    CompanyName: "Century Communities, Inc. Common Stock"
    },
    {
    Symbol: "CCSC",
    CompanyName: "Country Style Cooking Restaurant Chain Co., Ltd American Depositary Shares, each representing four ordinary shares"
    },
    {
    Symbol: "CCU",
    CompanyName: "Compania Cervecerias Unidas, S.A. Common Stock"
    },
    {
    Symbol: "CCV",
    CompanyName: "Comcast Corporation 5.00% Notes due 2061"
    },
    {
    Symbol: "CCZ",
    CompanyName: "Comcast Holdings ZONES"
    },
    {
    Symbol: "CDE",
    CompanyName: "Coeur Mining, Inc. Common Stock"
    },
    {
    Symbol: "CDE.W",
    CompanyName: "Coeur Mining, Inc. Warrant expiring April 16, 2017"
    },
    {
    Symbol: "CDI",
    CompanyName: "CDI Corporation Common Stock"
    },
    {
    Symbol: "CDR",
    CompanyName: "Cedar Realty Trust, Inc. Common Stock"
    },
    {
    Symbol: "CDR$B",
    CompanyName: "Cedar Realty Trust, Inc. 7.25% Series B Cumulative Redeemable Preferred Stock"
    },
    {
    Symbol: "CE",
    CompanyName: "Celanese Corporation Celanese Corporation Series A Common Stock"
    },
    {
    Symbol: "CEA",
    CompanyName: "China Eastern Airlines Corporation Ltd. Common Stock"
    },
    {
    Symbol: "CEB",
    CompanyName: "Corporate Executive Board Company (The) Common Stock"
    },
    {
    Symbol: "CEE",
    CompanyName: "Central Europe, Russia and Turkey Fund, Inc. (The) Common Stock"
    },
    {
    Symbol: "CEL",
    CompanyName: "Cellcom Israel, Ltd. Ordinary Shares"
    },
    {
    Symbol: "CELP",
    CompanyName: "Cypress Energy Partners, L.P. Common Units representing limited partner interests"
    },
    {
    Symbol: "CEM",
    CompanyName: "ClearBridge Energy MLP Fund Inc. Common Stock"
    },
    {
    Symbol: "CEN",
    CompanyName: "Center Coast MLP & Infrastructure Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "CEO",
    CompanyName: "CNOOC Limited Common Stock"
    },
    {
    Symbol: "CEQP",
    CompanyName: "Crestwood Equity Partners LP"
    },
    {
    Symbol: "CF",
    CompanyName: "CF Industries Holdings, Inc. Common Stock"
    },
    {
    Symbol: "CFC$A",
    CompanyName: "Countrywide Capital IV (New) 6.75% Trust Pfd Securities"
    },
    {
    Symbol: "CFC$B",
    CompanyName: "Countrywide Capital V (New) 7.00% Capital Securities"
    },
    {
    Symbol: "CFG",
    CompanyName: "Citizens Financial Group, Inc. Common Stock"
    },
    {
    Symbol: "CFI",
    CompanyName: "Culp, Inc. Common Stock"
    },
    {
    Symbol: "CFN",
    CompanyName: "CareFusion Corporation Common Stock"
    },
    {
    Symbol: "CFR",
    CompanyName: "Cullen/Frost Bankers, Inc. Common Stock"
    },
    {
    Symbol: "CFR$A",
    CompanyName: "Cullen/Frost Bankers, Inc. Perpetual Preferred Series A"
    },
    {
    Symbol: "CFX",
    CompanyName: "Colfax Corporation Common Stock"
    },
    {
    Symbol: "CGA",
    CompanyName: "China Green Agriculture, Inc. Common Stock"
    },
    {
    Symbol: "CGG",
    CompanyName: "CGG"
    },
    {
    Symbol: "CGI",
    CompanyName: "Celadon Group, Inc. Common Stock"
    },
    {
    Symbol: "CHA",
    CompanyName: "China Telecom Corp Ltd ADS"
    },
    {
    Symbol: "CHD",
    CompanyName: "Church & Dwight Company, Inc. Common Stock"
    },
    {
    Symbol: "CHE",
    CompanyName: "Chemed Corp"
    },
    {
    Symbol: "CHGG",
    CompanyName: "Chegg, Inc. Common Stock"
    },
    {
    Symbol: "CHH",
    CompanyName: "Choice Hotels International, Inc. Common Stock"
    },
    {
    Symbol: "CHK",
    CompanyName: "Chesapeake Energy Corporation Common Stock"
    },
    {
    Symbol: "CHK$D",
    CompanyName: "Chesapeake Energy Corporation Convertible Preferred"
    },
    {
    Symbol: "CHKR",
    CompanyName: "Chesapeake Granite Wash Trust Common Units representing beneficial interests in the Trust"
    },
    {
    Symbol: "CHL",
    CompanyName: "China Mobile Limited Common Stock"
    },
    {
    Symbol: "CHMI",
    CompanyName: "Cherry Hill Mortgage Investment Corporation Common Stock"
    },
    {
    Symbol: "CHMT",
    CompanyName: "Chemtura Corp. Common Stock"
    },
    {
    Symbol: "CHN",
    CompanyName: "China Fund, Inc. (The) Common Stock"
    },
    {
    Symbol: "CHS",
    CompanyName: "Chico's FAS, Inc. Common Stock"
    },
    {
    Symbol: "CHSP",
    CompanyName: "Chesapeake Lodging Trust Common Shares of Beneficial Interest"
    },
    {
    Symbol: "CHSP$A",
    CompanyName: "Chesapeake Lodging Trust 7.75% Series A Cumulative Redeemable Preferred Shares"
    },
    {
    Symbol: "CHT",
    CompanyName: "Chunghwa Telecom Co., Ltd."
    },
    {
    Symbol: "CHU",
    CompanyName: "China Unicom (Hong Kong) Ltd Common Stock"
    },
    {
    Symbol: "CI",
    CompanyName: "Cigna Corporation Common Stock"
    },
    {
    Symbol: "CIA",
    CompanyName: "Citizens, Inc. Class A Common Stock ($1.00 Par)"
    },
    {
    Symbol: "CIB",
    CompanyName: "BanColombia S.A. Common Stock"
    },
    {
    Symbol: "CIE",
    CompanyName: "Cobalt International Energy, Inc. COBALT INTERNATIONAL ENERGY, INC."
    },
    {
    Symbol: "CIEN",
    CompanyName: "Ciena Corporation Common Stock"
    },
    {
    Symbol: "CIF",
    CompanyName: "MFS Intermediate High Income Fund Common Stock"
    },
    {
    Symbol: "CIG",
    CompanyName: "Comp En De Mn Cemig ADS American Depositary Shares"
    },
    {
    Symbol: "CIG.C",
    CompanyName: "Comp En De Mn Cemig ADS American Depositary Receipts"
    },
    {
    Symbol: "CII",
    CompanyName: "Blackrock Capital and Income Fund, Inc."
    },
    {
    Symbol: "CIM",
    CompanyName: "Chimera Investment Corporation Common Stock"
    },
    {
    Symbol: "CIO",
    CompanyName: "City Office REIT, Inc. Common Stock"
    },
    {
    Symbol: "CIR",
    CompanyName: "CIRCOR International, Inc. Common Stock"
    },
    {
    Symbol: "CIT",
    CompanyName: "CIT Group Inc (DEL) Common Stock"
    },
    {
    Symbol: "CIVI",
    CompanyName: "Civitas Solutions, Inc. Common Stock"
    },
    {
    Symbol: "CJES",
    CompanyName: "C&J Energy Services, Inc. Common Stock"
    },
    {
    Symbol: "CKH",
    CompanyName: "SEACOR Holdings Inc. Common Stock"
    },
    {
    Symbol: "CKP",
    CompanyName: "Checkpoint Systms, Inc. Common Stock"
    },
    {
    Symbol: "CL",
    CompanyName: "Colgate"
    },
    {
    Symbol: "CLA",
    CompanyName: "Capitala Finance Corp. 7.125% Notes due 2021"
    },
    {
    Symbol: "CLB",
    CompanyName: "Core Laboratories N.V. Common Stock"
    },
    {
    Symbol: "CLC",
    CompanyName: "CLARCOR Inc. Common Stock"
    },
    {
    Symbol: "CLD",
    CompanyName: "Cloud Peak Energy Inc Common Stock"
    },
    {
    Symbol: "CLDT",
    CompanyName: "Chatham Lodging Trust (REIT) Common Shares of Beneficial Interest"
    },
    {
    Symbol: "CLF",
    CompanyName: "Cliffs Natural Resources Inc Common Stock"
    },
    {
    Symbol: "CLGX",
    CompanyName: "CoreLogic, Inc. Common Stock"
    },
    {
    Symbol: "CLH",
    CompanyName: "Clean Harbors, Inc. Common Stock"
    },
    {
    Symbol: "CLI",
    CompanyName: "Mack"
    },
    {
    Symbol: "CLNY",
    CompanyName: "Colony Financial, Inc Common Stock"
    },
    {
    Symbol: "CLNY$A",
    CompanyName: "Colony Finl Inc Cum Red Perp Pfd Ser A %"
    },
    {
    Symbol: "CLNY$B",
    CompanyName: "Colony Financial, Inc Perp Pfd Ser B %"
    },
    {
    Symbol: "CLR",
    CompanyName: "Continental Resources, Inc. Common Stock"
    },
    {
    Symbol: "CLS",
    CompanyName: "Celestica, Inc. Common Stock"
    },
    {
    Symbol: "CLV",
    CompanyName: "Cliffs Natural Resources Inc. Depositary Shares Representing 1/40th Preferred Convertible Series A"
    },
    {
    Symbol: "CLW",
    CompanyName: "Clearwater Paper Corporation Common Stock"
    },
    {
    Symbol: "CLX",
    CompanyName: "Clorox Company (The) Common Stock"
    },
    {
    Symbol: "CM",
    CompanyName: "Canadian Imperial Bank of Commerce Common Stock"
    },
    {
    Symbol: "CMA",
    CompanyName: "Comerica Incorporated Common Stock"
    },
    {
    Symbol: "CMA.W",
    CompanyName: "Comerica Incorporated Warrant expiring November 14, 2018"
    },
    {
    Symbol: "CMC",
    CompanyName: "Commercial Metals Company Common Stock"
    },
    {
    Symbol: "CMCM",
    CompanyName: "Cheetah Mobile Inc. American Depositary Shares, each representing 10 Class Ordinary Shares"
    },
    {
    Symbol: "CMG",
    CompanyName: "Chipotle Mexican Grill, Inc. Common Stock"
    },
    {
    Symbol: "CMI",
    CompanyName: "Cummins Inc. Common Stock"
    },
    {
    Symbol: "CMK",
    CompanyName: "MFS Intermarket Income Trust I Common Stock"
    },
    {
    Symbol: "CMLP",
    CompanyName: "Crestwood Midstream Partners LP"
    },
    {
    Symbol: "CMN",
    CompanyName: "Cantel Medical Corp. Common Stock"
    },
    {
    Symbol: "CMO",
    CompanyName: "Capstead Mortgage Corporation Common Stock"
    },
    {
    Symbol: "CMO$E",
    CompanyName: "Capstead Mortgage Corporation Pfd Ser E"
    },
    {
    Symbol: "CMP",
    CompanyName: "Compass Minerals Intl Inc Common Stock"
    },
    {
    Symbol: "CMRE",
    CompanyName: "Costamare Inc. Common Stock $0.0001 par value"
    },
    {
    Symbol: "CMRE$B",
    CompanyName: "Costamare Inc. Perpetual Preferred Stock Series B (Marshall Islands)"
    },
    {
    Symbol: "CMRE$C",
    CompanyName: "Costamare Inc. Perpetual Preferred Series C (Marshall Islands)"
    },
    {
    Symbol: "CMS",
    CompanyName: "CMS Energy Corporation Common Stock"
    },
    {
    Symbol: "CMS$B",
    CompanyName: "CMS Energy Corporation Preferred Stock"
    },
    {
    Symbol: "CMU",
    CompanyName: "MFS Municipal Income Trust Common Stock"
    },
    {
    Symbol: "CNA",
    CompanyName: "CNA Financial Corporation Common Stock"
    },
    {
    Symbol: "CNC",
    CompanyName: "Centene Corporation Common Stock"
    },
    {
    Symbol: "CNCO",
    CompanyName: "Cencosud S.A. American Depositary Shares (Each representing three Common Shares)"
    },
    {
    Symbol: "CNHI",
    CompanyName: "CNH Industrial N.V. Common Shares"
    },
    {
    Symbol: "CNI",
    CompanyName: "Canadian National Railway Company Common Stock"
    },
    {
    Symbol: "CNK",
    CompanyName: "Cinemark Holdings Inc Cinemark Holdings, Inc. Common Stock"
    },
    {
    Symbol: "CNL",
    CompanyName: "Cleco Corporation Common Stock"
    },
    {
    Symbol: "CNNX",
    CompanyName: "Cone Midstream Partners LP Common Units representing limited partner interests"
    },
    {
    Symbol: "CNO",
    CompanyName: "CNO Financial Group, Inc. Common Stock"
    },
    {
    Symbol: "CNP",
    CompanyName: "CenterPoint Energy, Inc (Holding Co) Common Stock"
    },
    {
    Symbol: "CNQ",
    CompanyName: "Canadian Natural Resources Limited Common Stock"
    },
    {
    Symbol: "CNS",
    CompanyName: "Cohn & Steers Inc Common Stock"
    },
    {
    Symbol: "CNW",
    CompanyName: "Con"
    },
    {
    Symbol: "CNX",
    CompanyName: "CONSOL Energy Inc. Common Stock"
    },
    {
    Symbol: "CO",
    CompanyName: "China Cord Blood Corporation Common Stock"
    },
    {
    Symbol: "CODE",
    CompanyName: "Spansion Inc Common Stock Class A New"
    },
    {
    Symbol: "CODI",
    CompanyName: "Compass Diversified Holdings Shares of Beneficial Interest"
    },
    {
    Symbol: "COF",
    CompanyName: "Capital One Financial Corporation Common Stock"
    },
    {
    Symbol: "COF-C",
    CompanyName: "Capital One Financial Corp Depository Shares Representing 1/40th Int Perp Pfd Ser C%"
    },
    {
    Symbol: "COF-D",
    CompanyName: "Capital One Financial Corp Depository Shares Representing 1/40th Interest Perpetual Preferred Series D"
    },
    {
    Symbol: "COF-P",
    CompanyName: "Capital One Financial Corp Pfd Ser B"
    },
    {
    Symbol: "COF.W",
    CompanyName: "Capital One Financial Corporation Warrants expiring November 14, 2018"
    },
    {
    Symbol: "COG",
    CompanyName: "Cabot Oil & Gas Corporation Common Stock"
    },
    {
    Symbol: "COH",
    CompanyName: "Coach, Inc. Common Stock"
    },
    {
    Symbol: "COL",
    CompanyName: "Rockwell Collins, Inc. Common Stock"
    },
    {
    Symbol: "COO",
    CompanyName: "Cooper Companies, Inc. (The) Common Stock"
    },
    {
    Symbol: "COP",
    CompanyName: "ConocoPhillips Common Stock"
    },
    {
    Symbol: "COR",
    CompanyName: "CoreSite Realty Corporation Common Stock"
    },
    {
    Symbol: "COR$A",
    CompanyName: "CoreSite Realty Corporation Pfd Ser A"
    },
    {
    Symbol: "CORR",
    CompanyName: "CorEnergy Infrastructure Trust, Inc. Common Stock"
    },
    {
    Symbol: "COT",
    CompanyName: "Cott Corporation Common Stock"
    },
    {
    Symbol: "COTY",
    CompanyName: "Coty Inc. Class A Common Stock"
    },
    {
    Symbol: "COUP",
    CompanyName: "Coupons.com Incorporated Common Stock"
    },
    {
    Symbol: "COV",
    CompanyName: "Covidien plc. Ordinary Shares (Ireland)"
    },
    {
    Symbol: "CP",
    CompanyName: "Canadian Pacific Railway Limited Common Stock"
    },
    {
    Symbol: "CPA",
    CompanyName: "Copa Holdings, S.A. Copa Holdings, S.A. Class A Common Stock"
    },
    {
    Symbol: "CPAC",
    CompanyName: "Cementos Pacasmayo S.A.A. American Depositary Shares, each representing five Common Shares"
    },
    {
    Symbol: "CPB",
    CompanyName: "Campbell Soup Company Common Stock"
    },
    {
    Symbol: "CPE",
    CompanyName: "Callon Petroleum Company Common Stock"
    },
    {
    Symbol: "CPE$A",
    CompanyName: "Callon Petroleum Company Preferred Shares Series A 10%"
    },
    {
    Symbol: "CPF",
    CompanyName: "Central Pacific Financial Corp New"
    },
    {
    Symbol: "CPG",
    CompanyName: "Crescent Point Energy Corporation Ordinary Shares (Canada)"
    },
    {
    Symbol: "CPK",
    CompanyName: "Chesapeake Utilities Corporation Common Stock"
    },
    {
    Symbol: "CPL",
    CompanyName: "CPFL Energia S.A. CPFL Energia S.A. American Depositary Shares"
    },
    {
    Symbol: "CPN",
    CompanyName: "Calpine Corporation Common Stock"
    },
    {
    Symbol: "CPS",
    CompanyName: "Cooper"
    },
    {
    Symbol: "CPT",
    CompanyName: "Camden Property Trust Common Stock"
    },
    {
    Symbol: "CR",
    CompanyName: "Crane Company Common Stock"
    },
    {
    Symbol: "CRC",
    CompanyName: "California Resources Corporation Common Stock"
    },
    {
    Symbol: "CRCM",
    CompanyName: "Care.com, Inc. Common Stock"
    },
    {
    Symbol: "CRD.A",
    CompanyName: "Crawford & Company Common Stock"
    },
    {
    Symbol: "CRD.B",
    CompanyName: "Crawford & Company Common Stock"
    },
    {
    Symbol: "CRH",
    CompanyName: "CRH PLC American Depositary Shares"
    },
    {
    Symbol: "CRI",
    CompanyName: "Carter's, Inc. Common Stock"
    },
    {
    Symbol: "CRK",
    CompanyName: "Comstock Resources, Inc. Common Stock"
    },
    {
    Symbol: "CRL",
    CompanyName: "Charles River Laboratories International, Inc. Common Stock"
    },
    {
    Symbol: "CRM",
    CompanyName: "Salesforce.com Inc Common Stock"
    },
    {
    Symbol: "CRR",
    CompanyName: "Carbo Ceramics, Inc. Common Stock"
    },
    {
    Symbol: "CRS",
    CompanyName: "Carpenter Technology Corporation Common Stock"
    },
    {
    Symbol: "CRT",
    CompanyName: "Cross Timbers Royalty Trust Common Stock"
    },
    {
    Symbol: "CRY",
    CompanyName: "CryoLife, Inc. Common Stock"
    },
    {
    Symbol: "CS",
    CompanyName: "Credit Suisse Group American Depositary Shares"
    },
    {
    Symbol: "CSC",
    CompanyName: "Computer Sciences Corporation Common Stock"
    },
    {
    Symbol: "CSG",
    CompanyName: "Chambers Street Properties Common Shares of Beneficial Interest"
    },
    {
    Symbol: "CSH",
    CompanyName: "Cash America International, Inc. Common Stock"
    },
    {
    Symbol: "CSI",
    CompanyName: "Cutwater Select Income Fund"
    },
    {
    Symbol: "CSL",
    CompanyName: "Carlisle Companies Incorporated Common Stock"
    },
    {
    Symbol: "CSLT",
    CompanyName: "Castlight Health, Inc. Class B Common Stock"
    },
    {
    Symbol: "CSS",
    CompanyName: "CSS Industries, Inc. Common Stock"
    },
    {
    Symbol: "CST",
    CompanyName: "CST Brands, Inc. Common Stock"
    },
    {
    Symbol: "CSTM",
    CompanyName: "Constellium N.V. Ordinary Shares"
    },
    {
    Symbol: "CSU",
    CompanyName: "Capital Senior Living Corporation Common Stock"
    },
    {
    Symbol: "CSV",
    CompanyName: "Carriage Services, Inc. Common Stock"
    },
    {
    Symbol: "CSX",
    CompanyName: "CSX Corporation Common Stock"
    },
    {
    Symbol: "CTB",
    CompanyName: "Cooper Tire & Rubber Company Common Stock"
    },
    {
    Symbol: "CTL",
    CompanyName: "CenturyLink, Inc. Common Stock"
    },
    {
    Symbol: "CTLT",
    CompanyName: "Catalent, Inc. Common Stock"
    },
    {
    Symbol: "CTQ",
    CompanyName: "Qwest Corporation 7.375% Notes due 2051"
    },
    {
    Symbol: "CTR",
    CompanyName: "ClearBridge Energy MLP Total Return Fund Inc. Common Stock"
    },
    {
    Symbol: "CTS",
    CompanyName: "CTS Corporation Common Stock"
    },
    {
    Symbol: "CTT",
    CompanyName: "CatchMark Timber Trust, Inc. Class A Common Stock"
    },
    {
    Symbol: "CTU",
    CompanyName: "Qwest Corporation 7.00% Notes due 2025"
    },
    {
    Symbol: "CTV",
    CompanyName: "Qwest Corporation 6.875% Notes due 2054"
    },
    {
    Symbol: "CTW",
    CompanyName: "Qwest Corporation 7.50% Notes due 2051"
    },
    {
    Symbol: "CTX",
    CompanyName: "Qwest Corporation 7.00% Notes due 2052"
    },
    {
    Symbol: "CTY",
    CompanyName: "Qwest Corporation 6.125% Notes due 2053"
    },
    {
    Symbol: "CUB",
    CompanyName: "Cubic Corporation Common Stock"
    },
    {
    Symbol: "CUBE",
    CompanyName: "CubeSmart Common Shares"
    },
    {
    Symbol: "CUBE$A",
    CompanyName: "CubeSmart 7.75% Series A Cumulative Redeemable Preferred Shares of Beneficial Interest"
    },
    {
    Symbol: "CUBI",
    CompanyName: "Customers Bancorp, Inc Common Stock"
    },
    {
    Symbol: "CUBS",
    CompanyName: "Customers Bancorp, Inc 6.375% Senior Notes due 2018"
    },
    {
    Symbol: "CUDA",
    CompanyName: "Barracuda Networks, Inc. Common Stock"
    },
    {
    Symbol: "CUK",
    CompanyName: "Carnival Plc ADS ADS"
    },
    {
    Symbol: "CUZ",
    CompanyName: "Cousins Properties Incorporated Common Stock"
    },
    {
    Symbol: "CVA",
    CompanyName: "Covanta Holding Corporation Common Stock"
    },
    {
    Symbol: "CVB",
    CompanyName: "Lehman ABS Corporation 7.75% Corp Backed Tr Ctfs, Kinder Morgan Debenture"
    },
    {
    Symbol: "CVC",
    CompanyName: "Cablevision Systems Corporation Class A Common Stock"
    },
    {
    Symbol: "CVD",
    CompanyName: "Covance Inc. Common Stock"
    },
    {
    Symbol: "CVE",
    CompanyName: "Cenovus Energy Inc Common Stock"
    },
    {
    Symbol: "CVEO",
    CompanyName: "Civeo Corporation Common Stock"
    },
    {
    Symbol: "CVG",
    CompanyName: "Convergys Corporation Common Stock"
    },
    {
    Symbol: "CVI",
    CompanyName: "CVR Energy Inc. Common Stock"
    },
    {
    Symbol: "CVO",
    CompanyName: "Cenveo Inc"
    },
    {
    Symbol: "CVRR",
    CompanyName: "CVR Refining, LP Common Units Representing Limited Partner Interests"
    },
    {
    Symbol: "CVS",
    CompanyName: "CVS Health Corporation Common Stock"
    },
    {
    Symbol: "CVT",
    CompanyName: "CVENT, INC. Common Stock"
    },
    {
    Symbol: "CVX",
    CompanyName: "Chevron Corporation Common Stock"
    },
    {
    Symbol: "CW",
    CompanyName: "Curtiss"
    },
    {
    Symbol: "CWEI",
    CompanyName: "Clayton Williams Energy, Inc. Common Stock"
    },
    {
    Symbol: "CWT",
    CompanyName: "California Water Service Group Common Stock"
    },
    {
    Symbol: "CX",
    CompanyName: "Cemex, S.A.B. de C.V. Sponsored ADR"
    },
    {
    Symbol: "CXE",
    CompanyName: "MFS High Income Municipal Trust Common Stock"
    },
    {
    Symbol: "CXH",
    CompanyName: "MFS Investment Grade Municipal Trust Common Stock"
    },
    {
    Symbol: "CXO",
    CompanyName: "Concho Resources Inc. Common Stock"
    },
    {
    Symbol: "CXP",
    CompanyName: "Columbia Property Trust, Inc. Common Stock"
    },
    {
    Symbol: "CXW",
    CompanyName: "Corrections Corporation of America Common Stock"
    },
    {
    Symbol: "CYD",
    CompanyName: "China Yuchai International Limited Common Stock"
    },
    {
    Symbol: "CYH",
    CompanyName: "Community Health Systems, Inc. Common Stock"
    },
    {
    Symbol: "CYN",
    CompanyName: "City National Corporation Common Stock"
    },
    {
    Symbol: "CYN$C",
    CompanyName: "City National Corporation Depositary Shares Representing 1/40th Perpetual Preferred Series Series C"
    },
    {
    Symbol: "CYN$D",
    CompanyName: "City National Corporation Depositary Shares Representing 1/40th Preferred Series D Fixed/Floating"
    },
    {
    Symbol: "CYNI",
    CompanyName: "Cyan, Inc. Common Stock"
    },
    {
    Symbol: "CYS",
    CompanyName: "CYS Investments, Inc. Common Stock"
    },
    {
    Symbol: "CYS$A",
    CompanyName: "CYS Investments Inc Cumulative Redeemable Preferred Series A"
    },
    {
    Symbol: "CYS$B",
    CompanyName: "CYS Investments, Inc. Preferred Series B"
    },
    {
    Symbol: "CYT",
    CompanyName: "Cytec Industries Inc. Common Stock"
    },
    {
    Symbol: "CZZ",
    CompanyName: "Cosan Limited Class A Common Stock"
    },
    {
    Symbol: "D",
    CompanyName: "Dominion Resources, Inc. Common Stock"
    },
    {
    Symbol: "DAC",
    CompanyName: "Danaos Corporation Common Stock"
    },
    {
    Symbol: "DAL",
    CompanyName: "Delta Air Lines, Inc. Common Stock"
    },
    {
    Symbol: "DAN",
    CompanyName: "Dana Holding Corporation Common Stock When"
    },
    {
    Symbol: "DANG",
    CompanyName: "E"
    },
    {
    Symbol: "DAR",
    CompanyName: "Darling Ingredients Inc. Common Stock"
    },
    {
    Symbol: "DATA",
    CompanyName: "Tableau Software, Inc. Class A Common Stock"
    },
    {
    Symbol: "DB",
    CompanyName: "Deutsche Bank AG Common Stock"
    },
    {
    Symbol: "DBD",
    CompanyName: "Diebold, Incorporated Common Stock"
    },
    {
    Symbol: "DBL",
    CompanyName: "DoubleLine Opportunistic Credit Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "DCA",
    CompanyName: "Virtus Total Return Fund"
    },
    {
    Symbol: "DCI",
    CompanyName: "Donaldson Company, Inc. Common Stock"
    },
    {
    Symbol: "DCM",
    CompanyName: "NTT DOCOMO, Inc American Depositary Shares"
    },
    {
    Symbol: "DCO",
    CompanyName: "Ducommun Incorporated Common Stock"
    },
    {
    Symbol: "DCT",
    CompanyName: "DCT Industrial Trust Inc Common Stock"
    },
    {
    Symbol: "DCUA",
    CompanyName: "Dominion Resources, Inc. Corporate Unit 2013 Series A"
    },
    {
    Symbol: "DCUB",
    CompanyName: "Dominion Resources, Inc. Corporate Unit 2013 Series B"
    },
    {
    Symbol: "DCUC",
    CompanyName: "Dominion Resources, Inc. VA New 2014 Series A Corp Unit"
    },
    {
    Symbol: "DD",
    CompanyName: "E.I. du Pont de Nemours and Company Common Stock"
    },
    {
    Symbol: "DD$A",
    CompanyName: "E.I. du Pont de Nemours and Company Preferred Stock"
    },
    {
    Symbol: "DD$B",
    CompanyName: "E.I. du Pont de Nemours and Company Preferred Stock"
    },
    {
    Symbol: "DDC",
    CompanyName: "Dominion Diamond Corporation Common Stock"
    },
    {
    Symbol: "DDD",
    CompanyName: "3D Systems Corporation Common Stock"
    },
    {
    Symbol: "DDE",
    CompanyName: "Dover Downs Gaming & Entertainment Inc Common Stock"
    },
    {
    Symbol: "DDF",
    CompanyName: "Delaware Investments Dividend & Income Fund, Inc. Common Stock"
    },
    {
    Symbol: "DDR",
    CompanyName: "DDR Corp. Common Stock"
    },
    {
    Symbol: "DDR$J",
    CompanyName: "DDR Corporation Dep Shs Repstg 1/20th Pfd Cl J"
    },
    {
    Symbol: "DDR$K",
    CompanyName: "DDR Corp. DEPOSITARY SH REPSTG 1/20TH PDF CL K % (United States)"
    },
    {
    Symbol: "DDS",
    CompanyName: "Dillard's, Inc. Common Stock"
    },
    {
    Symbol: "DDT",
    CompanyName: "Dillard's Capital Trust I"
    },
    {
    Symbol: "DE",
    CompanyName: "Deere & Company Common Stock"
    },
    {
    Symbol: "DECK",
    CompanyName: "Deckers Outdoor Corporation Common Stock"
    },
    {
    Symbol: "DEG",
    CompanyName: "Delhaize Group Stock Price, Forecast & Analysis"
    },
    {
    Symbol: "DEI",
    CompanyName: "Douglas Emmett, Inc. Common Stock"
    },
    {
    Symbol: "DEL",
    CompanyName: "Deltic Timber Corporation Common Stock"
    },
    {
    Symbol: "DEO",
    CompanyName: "Diageo plc Common Stock"
    },
    {
    Symbol: "DEX",
    CompanyName: "Delaware Enhanced Global Dividend Common Shares of Beneficial Interest"
    },
    {
    Symbol: "DF",
    CompanyName: "Dean Foods Company Common Stock"
    },
    {
    Symbol: "DFP",
    CompanyName: "Flaherty & Crumrine Dynamic Preferred and Income Fund Inc. Common Stock"
    },
    {
    Symbol: "DFS",
    CompanyName: "Discover Financial Services Common Stock"
    },
    {
    Symbol: "DFS$B",
    CompanyName: "Discover Financial Services Dep Shs"
    },
    {
    Symbol: "DFT",
    CompanyName: "Dupont Fabros Technology, Inc. Common Stock"
    },
    {
    Symbol: "DFT$A",
    CompanyName: "DuPont Fabros Technology Inc CUMULATIVE RED PERP PFD SER A"
    },
    {
    Symbol: "DFT$B",
    CompanyName: "Dupont Fabros Technology, Inc. 7.625% Series B Cumulative Redeemable Perpetual Preferred Stock"
    },
    {
    Symbol: "DG",
    CompanyName: "Dollar General Corporation Common Stock"
    },
    {
    Symbol: "DGI",
    CompanyName: "DigitalGlobe, Inc Common Stock"
    },
    {
    Symbol: "DGX",
    CompanyName: "Quest Diagnostics Incorporated Common Stock"
    },
    {
    Symbol: "DHF",
    CompanyName: "Dreyfus High Yield Strategies Fund Common Stock"
    },
    {
    Symbol: "DHG",
    CompanyName: "Deutsche High Income Opportunities Fund, Inc New Common Stock"
    },
    {
    Symbol: "DHI",
    CompanyName: "D.R. Horton, Inc. Common Stock"
    },
    {
    Symbol: "DHR",
    CompanyName: "Danaher Corporation Common Stock"
    },
    {
    Symbol: "DHT",
    CompanyName: "DHT Holdings, Inc."
    },
    {
    Symbol: "DHX",
    CompanyName: "Dice Holdings, Inc. Common Stock"
    },
    {
    Symbol: "DIAX",
    CompanyName: "Nuveen Dow 30SM Dynamic Overwrite Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "DIN",
    CompanyName: "DineEquity, Inc Common Stock"
    },
    {
    Symbol: "DIS",
    CompanyName: "Walt Disney Company (The) Common Stock"
    },
    {
    Symbol: "DK",
    CompanyName: "Delek US Holdings, Inc. Common Stock"
    },
    {
    Symbol: "DKL",
    CompanyName: "Delek Logistics Partners, L.P. Common Units representing Limited Partner Interests"
    },
    {
    Symbol: "DKS",
    CompanyName: "Dick's Sporting Goods Inc Common Stock"
    },
    {
    Symbol: "DKT",
    CompanyName: "Deutsch Bk Contingent Cap Tr V Tr Pfd Secs"
    },
    {
    Symbol: "DL",
    CompanyName: "China Distance Education Holdings Limited American Depositary Shares"
    },
    {
    Symbol: "DLB",
    CompanyName: "Dolby Laboratories Common Stock"
    },
    {
    Symbol: "DLNG",
    CompanyName: "Dynagas LNG Partners LP Common Units"
    },
    {
    Symbol: "DLPH",
    CompanyName: "Delphi Automotive plc Ordinary Shares"
    },
    {
    Symbol: "DLR",
    CompanyName: "Digital Realty Trust, Inc. Common Stock"
    },
    {
    Symbol: "DLR$E",
    CompanyName: "Digital Realty Trust, Inc. Redeemable Pfd Ser E"
    },
    {
    Symbol: "DLR$F",
    CompanyName: "Digital Realty Trust, Inc. Preferred Series F"
    },
    {
    Symbol: "DLR$G",
    CompanyName: "Digital Realty Trust, Inc. Preferred Series G"
    },
    {
    Symbol: "DLR$H",
    CompanyName: "Digital Realty Trust, Inc. Redeemable Preferred Stock Series H"
    },
    {
    Symbol: "DLX",
    CompanyName: "Deluxe Corporation Common Stock"
    },
    {
    Symbol: "DM",
    CompanyName: "Dominion Midstream Partners, LP Common Units representing Limited Partner Interests"
    },
    {
    Symbol: "DMB",
    CompanyName: "Dreyfus Municipal Bond Infrastructure Fund, Inc. Common Stock"
    },
    {
    Symbol: "DMD",
    CompanyName: "Demand Media Inc. Common Stock"
    },
    {
    Symbol: "DMO",
    CompanyName: "Western Asset Mortgage Defined Opportunity Fund Inc Common Stock"
    },
    {
    Symbol: "DNB",
    CompanyName: "Dun & Bradstreet Corporation (The) Common Stock"
    },
    {
    Symbol: "DNI",
    CompanyName: "Dividend and Income Fund Common Stock"
    },
    {
    Symbol: "DNOW",
    CompanyName: "NOW Inc. Common Stock"
    },
    {
    Symbol: "DNP",
    CompanyName: "DNP Select Income Fund, Inc. Common Stock"
    },
    {
    Symbol: "DNR",
    CompanyName: "Denbury Resources Inc. Common Stock"
    },
    {
    Symbol: "DNY",
    CompanyName: "The Denali Fund Inc"
    },
    {
    Symbol: "DO",
    CompanyName: "Diamond Offshore Drilling, Inc. Common Stock"
    },
    {
    Symbol: "DOC",
    CompanyName: "Physicians Realty Trust Common Shares of Beneficial Interest"
    },
    {
    Symbol: "DOM",
    CompanyName: "Dominion Resources Black Warrior Trust Common Stock"
    },
    {
    Symbol: "DOOR",
    CompanyName: "Masonite International Corporation Ordinary Shares (Canada)"
    },
    {
    Symbol: "DOV",
    CompanyName: "Dover Corporation Common Stock"
    },
    {
    Symbol: "DOW",
    CompanyName: "Dow Chemical Company (The) Common Stock"
    },
    {
    Symbol: "DPG",
    CompanyName: "Duff & Phelps Global Utility Income Fund Inc. Common Stock"
    },
    {
    Symbol: "DPLO",
    CompanyName: "Diplomat Pharmacy, Inc. Common Stock"
    },
    {
    Symbol: "DPM",
    CompanyName: "DCP Midstream Partners, LP DCP Midstream Partnership, LP Common Units"
    },
    {
    Symbol: "DPS",
    CompanyName: "Dr Pepper Snapple Group, Inc Dr Pepper Snapple Group, Inc Common Stock"
    },
    {
    Symbol: "DPZ",
    CompanyName: "Domino's Pizza Inc Common Stock"
    },
    {
    Symbol: "DQ",
    CompanyName: "DAQO New Energy Corp. American Depositary Shares, each representing five ordinary shares"
    },
    {
    Symbol: "DRA",
    CompanyName: "Diversified Real Asset Income Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "DRC",
    CompanyName: "Dresser"
    },
    {
    Symbol: "DRD",
    CompanyName: "DRDGOLD Limited American Depositary Shares"
    },
    {
    Symbol: "DRE",
    CompanyName: "Duke Realty Corporation Common Stock"
    },
    {
    Symbol: "DRH",
    CompanyName: "Diamondrock Hospitality Company Common Stock"
    },
    {
    Symbol: "DRI",
    CompanyName: "Darden Restaurants, Inc. Common Stock"
    },
    {
    Symbol: "DRII",
    CompanyName: "Diamond Resorts International, Inc. Common Stock"
    },
    {
    Symbol: "DRL",
    CompanyName: "Doral Financial Corporation NEW Common Stock"
    },
    {
    Symbol: "DRQ",
    CompanyName: "Dril"
    },
    {
    Symbol: "DSE",
    CompanyName: "Duff & Phelps Select Energy MLP Fund Inc. Common Stock"
    },
    {
    Symbol: "DSL",
    CompanyName: "DoubleLine Income Solutions Fund Common Shares of Beneficial Interests"
    },
    {
    Symbol: "DSM",
    CompanyName: "Dreyfus Strategic Municipal Bond Fund, Inc. Common Stock"
    },
    {
    Symbol: "DST",
    CompanyName: "DST Systems, Inc. Common Stock"
    },
    {
    Symbol: "DSU",
    CompanyName: "Blackrock Debt Strategies Fund, Inc. Common Stock"
    },
    {
    Symbol: "DSW",
    CompanyName: "DSW Inc. Common Stock"
    },
    {
    Symbol: "DSX",
    CompanyName: "Diana Shipping inc. common stock"
    },
    {
    Symbol: "DSX$B",
    CompanyName: "Diana Shipping Inc. Perpetual Preferred Shares Series B (Marshall Islands)"
    },
    {
    Symbol: "DTE",
    CompanyName: "DTE Energy Company Common Stock"
    },
    {
    Symbol: "DTF",
    CompanyName: "DTF Tax"
    },
    {
    Symbol: "DTK",
    CompanyName: "Deutsche Bk Contingent Cap Tr III Tr Pfd Secs"
    },
    {
    Symbol: "DTLA$",
    CompanyName: "Brookfield DTLA Inc. 7.625% Series A Cumulative Redeemable Preferred Stock"
    },
    {
    Symbol: "DTQ",
    CompanyName: "DTE Energy Company 2012 Series C 5.25% Junior Subordinate Debentures due December 1, 2062"
    },
    {
    Symbol: "DTT",
    CompanyName: "Deutsche Bank Cap Fdg Tr IX Guaranteed Trust Preferred Securities"
    },
    {
    Symbol: "DTZ",
    CompanyName: "DTE Energy Company 2011 Series I 6.50% Junior Subordinate Debentures due 2061"
    },
    {
    Symbol: "DUA",
    CompanyName: "Deutsche Bank Cap Fdg Tr VIII 6.375% Tr Pfd Secs"
    },
    {
    Symbol: "DUC",
    CompanyName: "Duff & Phelps Utility & Corporate Bond Trust, Inc. Common Stock"
    },
    {
    Symbol: "DUK",
    CompanyName: "Duke Energy Corporation (Holding Company) Common Stock"
    },
    {
    Symbol: "DUKH",
    CompanyName: "Duke Energy Corporation 5.125% Junior Subordinated Debentures due 2073"
    },
    {
    Symbol: "DV",
    CompanyName: "DeVry Education Group Inc. Common Stock"
    },
    {
    Symbol: "DVA",
    CompanyName: "DaVita HealthCare Partners Inc. Common Stock"
    },
    {
    Symbol: "DVD",
    CompanyName: "Dover Motorsports, Inc. Common Stock"
    },
    {
    Symbol: "DVN",
    CompanyName: "Devon Energy Corporation Common Stock"
    },
    {
    Symbol: "DW",
    CompanyName: "Drew Industries Incorporated Common Stock ($0.01 Par Value)"
    },
    {
    Symbol: "DWRE",
    CompanyName: "DEMANDWARE, INC. Common Stock"
    },
    {
    Symbol: "DX",
    CompanyName: "Dynex Capital, Inc. Common Stock"
    },
    {
    Symbol: "DX$A",
    CompanyName: "Dynex Capital, Inc. Preferred Stock Series A"
    },
    {
    Symbol: "DX$B",
    CompanyName: "Dynex Capital, Inc. Preferred Series B"
    },
    {
    Symbol: "DXB",
    CompanyName: "Deutsche Bk Contingent Cap TR II Tr Pfd Sec"
    },
    {
    Symbol: "DY",
    CompanyName: "Dycom Industries, Inc. Common Stock"
    },
    {
    Symbol: "DYN",
    CompanyName: "Dynegy Inc. Common Stock"
    },
    {
    Symbol: "DYN$A",
    CompanyName: "Dynegy Inc. Mandatory Preferred Convertible Series A%"
    },
    {
    Symbol: "DYN.W",
    CompanyName: "Dynegy Inc. Warrant expiring October 2, 2017"
    },
    {
    Symbol: "E",
    CompanyName: "ENI S.p.A. Common Stock"
    },
    {
    Symbol: "EAA",
    CompanyName: "Entergy Arkansas, Inc. First Mortgage Bonds, 5.75% Series Due November 1, 2040"
    },
    {
    Symbol: "EAB",
    CompanyName: "Entergy Arkansas, Inc. First Mortgage Bonds, 4.90% Series Due December 1, 2052"
    },
    {
    Symbol: "EAE",
    CompanyName: "Entergy Arkansas, Inc. First Mortgage Bonds, 4.75% Series due June 1, 2063"
    },
    {
    Symbol: "EARN",
    CompanyName: "Ellington Residential Mortgage REIT Common Shares of Beneficial Interest"
    },
    {
    Symbol: "EAT",
    CompanyName: "Brinker International, Inc. Common Stock"
    },
    {
    Symbol: "EBF",
    CompanyName: "Ennis, Inc. Common Stock"
    },
    {
    Symbol: "EBR",
    CompanyName: "Centrais Elc Braz Pfb B Elbras American Depositary Shares"
    },
    {
    Symbol: "EBR.B",
    CompanyName: "Centrais Elc Braz Pfb B Elbras American Depositary Shares"
    },
    {
    Symbol: "EBS",
    CompanyName: "Emergent Biosolutions, Inc. Common Stock"
    },
    {
    Symbol: "EC",
    CompanyName: "Ecopetrol S.A. American Depositary Shares"
    },
    {
    Symbol: "ECA",
    CompanyName: "Encana Corporation"
    },
    {
    Symbol: "ECC",
    CompanyName: "Eagle Point Credit Company Inc. Common Stock"
    },
    {
    Symbol: "ECL",
    CompanyName: "Ecolab Inc. Common Stock"
    },
    {
    Symbol: "ECOM",
    CompanyName: "ChannelAdvisor Corporation Common Stock"
    },
    {
    Symbol: "ECR",
    CompanyName: "Eclipse Resources Corporation Common Stock"
    },
    {
    Symbol: "ECT",
    CompanyName: "ECA Marcellus Trust I Common Units of Beneficial Interest"
    },
    {
    Symbol: "ED",
    CompanyName: "Consolidated Edison, Inc. Common Stock"
    },
    {
    Symbol: "EDD",
    CompanyName: "Morgan Stanley Emerging Markets Domestic Debt Fund, Inc. Morgan Stanley Emerging Markets Domestic Debt Fund, Inc. Common Stock"
    },
    {
    Symbol: "EDE",
    CompanyName: "Empire District Electric Company (The) Common Stock"
    },
    {
    Symbol: "EDF",
    CompanyName: "Stone Harbor Emerging Markets Income Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "EDI",
    CompanyName: "Stone Harbor Emerging Markets Total Income Fund Common Shares of Beneficial Interests"
    },
    {
    Symbol: "EDN",
    CompanyName: "Empresa Distribuidora Y Comercializadora Norte S.A. (Edenor) Empresa Distribuidora Y Comercializadora Norte S.A. (Edenor) American Depositary Shares"
    },
    {
    Symbol: "EDR",
    CompanyName: "Education Realty Trust, Inc. Common Stock"
    },
    {
    Symbol: "EDU",
    CompanyName: "New Oriental Education & Technology Group, Inc. Sponsored ADR representing 1 Ordinary Share (Cayman Islands)"
    },
    {
    Symbol: "EE",
    CompanyName: "El Paso Electric Company Common Stock"
    },
    {
    Symbol: "EEA",
    CompanyName: "The European Equity Fund, Inc. Common Stock"
    },
    {
    Symbol: "EEP",
    CompanyName: "Enbridge Energy, L.P. Class A Common Units"
    },
    {
    Symbol: "EEQ",
    CompanyName: "Enbridge Energy Management LLC Shares repstg limited liability company interests"
    },
    {
    Symbol: "EFC",
    CompanyName: "Ellington Financial LLC Common Shares representing Limitied Liability Company Interests, no par valu"
    },
    {
    Symbol: "EFF",
    CompanyName: "Eaton vance Floating"
    },
    {
    Symbol: "EFM",
    CompanyName: "Entergy Mississippi, Inc. First Mortgage Bonds, 6.20% Series due April 15, 2040"
    },
    {
    Symbol: "EFR",
    CompanyName: "Eaton Vance Senior Floating"
    },
    {
    Symbol: "EFT",
    CompanyName: "Eaton Vance Floating Rate Income Trust Common Shares of Beneficial Interest"
    },
    {
    Symbol: "EFX",
    CompanyName: "Equifax, Inc. Common Stock"
    },
    {
    Symbol: "EGF",
    CompanyName: "Blackrock Enhanced Government Fund, Inc. Common Stock"
    },
    {
    Symbol: "EGL",
    CompanyName: "Engility Holdings, Inc. Common Stock"
    },
    {
    Symbol: "EGN",
    CompanyName: "Energen Corporation Common Stock"
    },
    {
    Symbol: "EGO",
    CompanyName: "Eldorado Gold Corporation Ordinary Shares"
    },
    {
    Symbol: "EGP",
    CompanyName: "EastGroup Properties, Inc. Common Stock"
    },
    {
    Symbol: "EGY",
    CompanyName: "Vaalco Energy Inc Common Stock"
    },
    {
    Symbol: "EHI",
    CompanyName: "Western Asset Global High Income Fund Inc Common Stock"
    },
    {
    Symbol: "EHIC",
    CompanyName: "eHi Car Services Limited American Depositary Shares"
    },
    {
    Symbol: "EIG",
    CompanyName: "Employers Holdings Inc Common Stock"
    },
    {
    Symbol: "EIX",
    CompanyName: "Edison International Common Stock"
    },
    {
    Symbol: "EJ",
    CompanyName: "E"
    },
    {
    Symbol: "EL",
    CompanyName: "Estee Lauder Companies, Inc. (The) Common Stock"
    },
    {
    Symbol: "ELA",
    CompanyName: "Entergy Louisiana, LLC First Mortgage Bonds, 5.875% Series due June 15, 2041"
    },
    {
    Symbol: "ELB",
    CompanyName: "Entergy Louisiana, Inc. 6.0% Series Due March 15, 2040"
    },
    {
    Symbol: "ELJ",
    CompanyName: "Entergy Louisiana, Inc. First Mortgage Bonds, 5.25% Series due July 1, 2052"
    },
    {
    Symbol: "ELLI",
    CompanyName: "Ellie Mae, Inc. Common Stock"
    },
    {
    Symbol: "ELP",
    CompanyName: "Companhia Paranaense de Energia (COPEL) Common Stock"
    },
    {
    Symbol: "ELS",
    CompanyName: "Equity Lifestyle Properties, Inc. Common Stock"
    },
    {
    Symbol: "ELS$C",
    CompanyName: "Equity Lifestyle Properties, Inc. Depositary Shares each representing 1/100th of a share of 6.75% Series C Cumulative Redeemable Perpetual Preferred Stock"
    },
    {
    Symbol: "ELU",
    CompanyName: "Entergy Louisiana, Inc. First Mortgage Bonds, 4.70% Series due June 1, 2063"
    },
    {
    Symbol: "ELX",
    CompanyName: "Emulex Corporation Common Stock"
    },
    {
    Symbol: "ELY",
    CompanyName: "Callaway Golf Company Common Stock"
    },
    {
    Symbol: "EMC",
    CompanyName: "EMC Corporation Common Stock"
    },
    {
    Symbol: "EMD",
    CompanyName: "Western Asset Emerging Markets Income Fund, Inc. Common Stock"
    },
    {
    Symbol: "EME",
    CompanyName: "EMCOR Group, Inc. Common Stock"
    },
    {
    Symbol: "EMES",
    CompanyName: "Emerge Energy Services LP Common Units representing Limited Partner Interests"
    },
    {
    Symbol: "EMF",
    CompanyName: "Templeton Emerging Markets Fund Common Stock"
    },
    {
    Symbol: "EMN",
    CompanyName: "Eastman Chemical Company Common Stock"
    },
    {
    Symbol: "EMO",
    CompanyName: "ClearBridge Energy MLP Opportunity Fund Inc. Common Stock"
    },
    {
    Symbol: "EMQ",
    CompanyName: "Entergy Mississippi, Inc. 1st Mtg Bds"
    },
    {
    Symbol: "EMR",
    CompanyName: "Emerson Electric Company Common Stock"
    },
    {
    Symbol: "EMZ",
    CompanyName: "Entergy Mississippi, Inc. First Mortgage Bonds, 6.0% Series due May 1, 2051"
    },
    {
    Symbol: "ENB",
    CompanyName: "Enbridge Inc Common Stock"
    },
    {
    Symbol: "ENBL",
    CompanyName: "Enable Midstream Partners, LP Common Units representing limited partner interests"
    },
    {
    Symbol: "ENH",
    CompanyName: "Endurance Specialty Holdings Ltd Common Stock"
    },
    {
    Symbol: "ENH$A",
    CompanyName: "Endurance Specialty Holdings Ltd Preferred Series A"
    },
    {
    Symbol: "ENH$B",
    CompanyName: "Endurance Specialty Holdings Ltd PFD SER B (Bermuda)"
    },
    {
    Symbol: "ENI",
    CompanyName: "Enersis S A Common Stock"
    },
    {
    Symbol: "ENJ",
    CompanyName: "Entergy New Orleans, Inc. First Mortgage Bonds, 5.0% Series due December 1, 2052"
    },
    {
    Symbol: "ENL",
    CompanyName: "Reed Elsevier NV American Depositary Shares"
    },
    {
    Symbol: "ENLC",
    CompanyName: "EnLink Midstream, LLC Common Units representing Limited Partner Interests"
    },
    {
    Symbol: "ENLK",
    CompanyName: "EnLink Midstream Partners, LP Common Units Representing Limited Partnership Interests"
    },
    {
    Symbol: "ENR",
    CompanyName: "Energizer Holdings, Inc. Common Stock"
    },
    {
    Symbol: "ENS",
    CompanyName: "Enersys Common Stock"
    },
    {
    Symbol: "ENV",
    CompanyName: "Envestnet, Inc Common Stock"
    },
    {
    Symbol: "ENVA",
    CompanyName: "Enova International, Inc. Common Stock"
    },
    {
    Symbol: "ENZ",
    CompanyName: "Enzo Biochem, Inc. Common Stock ($0.01 Par Value)"
    },
    {
    Symbol: "EOC",
    CompanyName: "Empresa Nacional de Electricidad S.A. Common Stock"
    },
    {
    Symbol: "EOD",
    CompanyName: "Wells Fargo Advantage Global Dividend Opportunity Fund"
    },
    {
    Symbol: "EOG",
    CompanyName: "EOG Resources, Inc. Common Stock"
    },
    {
    Symbol: "EOI",
    CompanyName: "Eaton Vance Enhance Equity Income Fund Eaton Vance Enhanced Equity Income Fund Shares of Beneficial Interest"
    },
    {
    Symbol: "EOS",
    CompanyName: "Eaton Vance Enhance Equity Income Fund II Common Stock"
    },
    {
    Symbol: "EOT",
    CompanyName: "Eaton Vance Municipal Income Trust EATON VANCE NATIONAL MUNICIPAL OPPORTUNITIES TRUST"
    },
    {
    Symbol: "EP$C",
    CompanyName: "El Paso Corporation Preferred Stock"
    },
    {
    Symbol: "EPAM",
    CompanyName: "EPAM Systems, Inc. Common Stock"
    },
    {
    Symbol: "EPD",
    CompanyName: "Enterprise Products Partners L.P. Common Stock"
    },
    {
    Symbol: "EPE",
    CompanyName: "EP Energy Corporation Class A Common Stock"
    },
    {
    Symbol: "EPR",
    CompanyName: "EPR Properties Common Stock"
    },
    {
    Symbol: "EPR$C",
    CompanyName: "EPR Properties 5.75% Series C Cumulative Convertible Preferred Shares"
    },
    {
    Symbol: "EPR$E",
    CompanyName: "EPR Properties Series E Cumulative Conv Pfd Shs Ser E"
    },
    {
    Symbol: "EPR$F",
    CompanyName: "EPR Properties Pfd Ser F"
    },
    {
    Symbol: "EQC",
    CompanyName: "Equity Commonwealth Common Shares of Beneficial Interest"
    },
    {
    Symbol: "EQC$D",
    CompanyName: "Equity Commonwealth 6.50% Pfd Conv Shs Ser D"
    },
    {
    Symbol: "EQC$E",
    CompanyName: "Equity Commonwealth 7.25% Series E Cumulative Redeemable Preferred Shares"
    },
    {
    Symbol: "EQCO",
    CompanyName: "Equity Commonwealth 5.75% Senior Notes due 2042"
    },
    {
    Symbol: "EQM",
    CompanyName: "EQT Midstream Partners, LP Common Units representing Limited Partner Interests"
    },
    {
    Symbol: "EQR",
    CompanyName: "Equity Residential Common Shares of Beneficial Interest"
    },
    {
    Symbol: "EQS",
    CompanyName: "Equus Total Return, Inc. Common Stock"
    },
    {
    Symbol: "EQT",
    CompanyName: "EQT Corporation Common Stock"
    },
    {
    Symbol: "EQY",
    CompanyName: "Equity One, Inc. Common Stock"
    },
    {
    Symbol: "ERA",
    CompanyName: "Era Group, Inc. Common Stock"
    },
    {
    Symbol: "ERF",
    CompanyName: "Enerplus Corporation Common Stock"
    },
    {
    Symbol: "ERJ",
    CompanyName: "Embraer S.A. Common Stock"
    },
    {
    Symbol: "EROS",
    CompanyName: "Eros International PLC A Ordinary Shares"
    },
    {
    Symbol: "ESD",
    CompanyName: "Western Asset Emerging Markets Debt Fund Inc Common Stock"
    },
    {
    Symbol: "ESE",
    CompanyName: "ESCO Technologies Inc. Common Stock"
    },
    {
    Symbol: "ESI",
    CompanyName: "ITT Educational Services, Inc. Common Stock"
    },
    {
    Symbol: "ESL",
    CompanyName: "Esterline Technologies Corporation Common Stock"
    },
    {
    Symbol: "ESNT",
    CompanyName: "Essent Group Ltd. Common Shares"
    },
    {
    Symbol: "ESRT",
    CompanyName: "Empire State Realty Trust, Inc. Class A Common Stock"
    },
    {
    Symbol: "ESS",
    CompanyName: "Essex Property Trust, Inc. Common Stock"
    },
    {
    Symbol: "ESS$H",
    CompanyName: "Essex Property Trust, Inc. 7.125% Series H Cumulative Redeemable Preferred Stock"
    },
    {
    Symbol: "ESV",
    CompanyName: "Ensco plc Class A Ordinary Shares"
    },
    {
    Symbol: "ETB",
    CompanyName: "Eaton Vance Tax"
    },
    {
    Symbol: "ETE",
    CompanyName: "Energy Transfer Equity, L.P. Energy Transfer Equity, L.P. Common Units representing Limited Partnership interests"
    },
    {
    Symbol: "ETG",
    CompanyName: "Eaton Vance Tax"
    },
    {
    Symbol: "ETH",
    CompanyName: "Ethan Allen Interiors Inc. Common Stock"
    },
    {
    Symbol: "ETJ",
    CompanyName: "Eaton Vance Risk"
    },
    {
    Symbol: "ETM",
    CompanyName: "Entercom Communications Corporation Common Stock"
    },
    {
    Symbol: "ETN",
    CompanyName: "Eaton Corporation, PLC Ordinary Shares"
    },
    {
    Symbol: "ETO",
    CompanyName: "Eaton Vance Tax"
    },
    {
    Symbol: "ETP",
    CompanyName: "Energy Transfer Partners, L.P. ENERGY TRANSFER PARNTERS"
    },
    {
    Symbol: "ETR",
    CompanyName: "Entergy Corporation Common Stock"
    },
    {
    Symbol: "ETV",
    CompanyName: "Eaton Vance Corporation Eaton Vance Tax"
    },
    {
    Symbol: "ETW",
    CompanyName: "Eaton Vance Corporation Eaton Vance Tax"
    },
    {
    Symbol: "ETX",
    CompanyName: "Eaton Vance Municipal Income Term Trust Common Shares of Beneficial Interest"
    },
    {
    Symbol: "ETY",
    CompanyName: "Eaton Vance Tax"
    },
    {
    Symbol: "EV",
    CompanyName: "Eaton Vance Corporation Common Stock"
    },
    {
    Symbol: "EVC",
    CompanyName: "Entravision Communications Corporation Common Stock"
    },
    {
    Symbol: "EVDY",
    CompanyName: "Everyday Health, Inc. Common Stock"
    },
    {
    Symbol: "EVER",
    CompanyName: "EverBank Financial Corp. Common Stock"
    },
    {
    Symbol: "EVER$A",
    CompanyName: "EverBank Financial Corp. Depositary Shares Representing 1/1000th Perpetual Preferred Series A"
    },
    {
    Symbol: "EVF",
    CompanyName: "Eaton Vance Senior Income Trust Common Stock"
    },
    {
    Symbol: "EVG",
    CompanyName: "Eaton Vance Short Diversified Income Fund Eaton Vance Short Duration Diversified Income Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "EVGN",
    CompanyName: "Evogene Ltd Ordinary shares (Israel)"
    },
    {
    Symbol: "EVHC",
    CompanyName: "Envision Healthcare Holdings, Inc. Common Stock"
    },
    {
    Symbol: "EVN",
    CompanyName: "Eaton Vance Municipal Income Trust Common Stock"
    },
    {
    Symbol: "EVR",
    CompanyName: "Evercore Partners Inc Class A Common Stock"
    },
    {
    Symbol: "EVT",
    CompanyName: "Eaton Vance Tax Advantaged Dividend Income Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "EVTC",
    CompanyName: "Evertec, Inc. Common Stock"
    },
    {
    Symbol: "EW",
    CompanyName: "Edwards Lifesciences Corporation Common Stock"
    },
    {
    Symbol: "EXAM",
    CompanyName: "ExamWorks Group, Inc. Common Stock"
    },
    {
    Symbol: "EXAR",
    CompanyName: "Exar Corporation Common Stock"
    },
    {
    Symbol: "EXC",
    CompanyName: "Exelon Corporation Common Stock"
    },
    {
    Symbol: "EXCU",
    CompanyName: "Exelon Corp. Conv Unit"
    },
    {
    Symbol: "EXD",
    CompanyName: "Eaton Vance Tax"
    },
    {
    Symbol: "EXG",
    CompanyName: "Eaton Vance Tax"
    },
    {
    Symbol: "EXH",
    CompanyName: "Exterran Holdings, Inc. Common Stock"
    },
    {
    Symbol: "EXK",
    CompanyName: "Endeavour Silver Corporation Ordinary Shares (Canada)"
    },
    {
    Symbol: "EXL",
    CompanyName: "Excel Trust, Inc. Common Stock"
    },
    {
    Symbol: "EXL$B",
    CompanyName: "Excel Trust, Inc. 8.125% Series B Cumulative Redeemable Preferred Stock, $0.01 par value"
    },
    {
    Symbol: "EXP",
    CompanyName: "Eagle Materials Inc Common Stock"
    },
    {
    Symbol: "EXPR",
    CompanyName: "Express, Inc. Common Stock"
    },
    {
    Symbol: "EXR",
    CompanyName: "Extra Space Storage Inc Common Stock"
    },
    {
    Symbol: "EZT",
    CompanyName: "Entergy Texas Inc First Mortgage Bonds 5.625% Series due June 1, 2064"
    },
    {
    Symbol: "F",
    CompanyName: "Ford Motor Company Common Stock"
    },
    {
    Symbol: "FAC",
    CompanyName: "First Acceptance Corporation"
    },
    {
    Symbol: "FAF",
    CompanyName: "First American Corporation (New) Common Stock"
    },
    {
    Symbol: "FAM",
    CompanyName: "First Trust/Aberdeen Global Opportunity Income Fund First Trust/Aberdeen Global Opportunity Income Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "FAV",
    CompanyName: "First Trust Dividend and Income Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "FBC",
    CompanyName: "Flagstar Bancorp, Inc. Common Stock"
    },
    {
    Symbol: "FBHS",
    CompanyName: "Fortune Brands Home & Security, Inc. Common Stock"
    },
    {
    Symbol: "FBP",
    CompanyName: "First BanCorp. New Common Stock"
    },
    {
    Symbol: "FBR",
    CompanyName: "Fibria Celulose S.A."
    },
    {
    Symbol: "FBS$A",
    CompanyName: "First Preferred Cap Tr Iv First Preferred Capital Trust IV 8.15% Cum Trust Pfd Sec"
    },
    {
    Symbol: "FC",
    CompanyName: "Franklin Covey Company Common Stock"
    },
    {
    Symbol: "FCAM",
    CompanyName: "Fiat Chrysler Automobiles N.V. Mandatory Convertible Securities"
    },
    {
    Symbol: "FCAU",
    CompanyName: "Fiat Chrysler Automobiles N.V. Common Shares"
    },
    {
    Symbol: "FCB",
    CompanyName: "FCB Financial Holdings, Inc. Class A Common Stock"
    },
    {
    Symbol: "FCE.A",
    CompanyName: "Forest City Enterprises, Inc. Common Stock"
    },
    {
    Symbol: "FCE.B",
    CompanyName: "Forest City Enterprises, Inc. Common Stock"
    },
    {
    Symbol: "FCF",
    CompanyName: "First Commonwealth Financial Corporation Common Stock"
    },
    {
    Symbol: "FCH",
    CompanyName: "FelCor Lodging Trust Incorporated Common Stock"
    },
    {
    Symbol: "FCH$A",
    CompanyName: "FelCor Lodging Trust Incorporated Preferred Stock"
    },
    {
    Symbol: "FCH$C",
    CompanyName: "FelCor Lodging Trust Incorporated Dep Shares Representing 1/100 Preferred Series C"
    },
    {
    Symbol: "FCN",
    CompanyName: "FTI Consulting, Inc. Common Stock"
    },
    {
    Symbol: "FCT",
    CompanyName: "First Trust Senior Floating Rate Income Fund II Common Shares of Beneficial Interest"
    },
    {
    Symbol: "FCX",
    CompanyName: "Freeport"
    },
    {
    Symbol: "FDI",
    CompanyName: "Fort Dearborn Income Securities, Inc. Common Stock"
    },
    {
    Symbol: "FDO",
    CompanyName: "Family Dollar Stores, Inc. Common Stock"
    },
    {
    Symbol: "FDP",
    CompanyName: "Fresh Del Monte Produce, Inc. Common Stock"
    },
    {
    Symbol: "FDS",
    CompanyName: "FactSet Research Systems Inc. Common Stock"
    },
    {
    Symbol: "FDX",
    CompanyName: "FedEx Corporation Common Stock"
    },
    {
    Symbol: "FE",
    CompanyName: "FirstEnergy Corporation Common Stock"
    },
    {
    Symbol: "FEI",
    CompanyName: "First Trust MLP and Energy Income Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "FELP",
    CompanyName: "Foresight Energy LP Common Units representing Limited Partner Interests"
    },
    {
    Symbol: "FENG",
    CompanyName: "Phoenix New Media Limited American Depositary Shares, each representing 8 Class A ordinary shares."
    },
    {
    Symbol: "FEO",
    CompanyName: "First Trust/Aberdeen Emerging Opportunity Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "FET",
    CompanyName: "Forum Energy Technologies, Inc. Common Stock"
    },
    {
    Symbol: "FF",
    CompanyName: "FutureFuel Corp. Common shares"
    },
    {
    Symbol: "FFA",
    CompanyName: "First Trust Enhanced Equity Income Fund"
    },
    {
    Symbol: "FFC",
    CompanyName: "Flaherty & Crumrine Preferred Securities Income Fund Incorporated"
    },
    {
    Symbol: "FFG",
    CompanyName: "FBL Financial Group, Inc. Common Stock"
    },
    {
    Symbol: "FGB",
    CompanyName: "First Trust Specialty Finance and Financial Opportunities Fund"
    },
    {
    Symbol: "FGL",
    CompanyName: "Fidelity & Guaranty Life Common Stock"
    },
    {
    Symbol: "FGP",
    CompanyName: "Ferrellgas Partners, L.P. Common Stock"
    },
    {
    Symbol: "FHN",
    CompanyName: "First Horizon National Corporation Common Stock"
    },
    {
    Symbol: "FHN$A",
    CompanyName: "First Horizon National Corporation Depositary Shares"
    },
    {
    Symbol: "FHY",
    CompanyName: "First Trust Strategic High Income Fund II First Trust Strategic High Income Fund II Common Shares of Beneficial Interest"
    },
    {
    Symbol: "FI",
    CompanyName: "Frank's International N.V. Common Stock"
    },
    {
    Symbol: "FICO",
    CompanyName: "Fair Isaac Corproation Common Stock"
    },
    {
    Symbol: "FIF",
    CompanyName: "First Trust Energy Infrastructure Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "FIG",
    CompanyName: "Fortress Investment Group LLC Class A Common Stock"
    },
    {
    Symbol: "FII",
    CompanyName: "Federated Investors, Inc. Common Stock"
    },
    {
    Symbol: "FIS",
    CompanyName: "Fidelity National Information Services, Inc. Common Stock"
    },
    {
    Symbol: "FIX",
    CompanyName: "Comfort Systems USA, Inc. Common Stock"
    },
    {
    Symbol: "FL",
    CompanyName: "Foot Locker, Inc."
    },
    {
    Symbol: "FLC",
    CompanyName: "Flaherty & Crumrine Total Return Fund Inc Common Stock"
    },
    {
    Symbol: "FLO",
    CompanyName: "Flowers Foods, Inc. Common Stock"
    },
    {
    Symbol: "FLR",
    CompanyName: "Fluor Corporation Common Stock"
    },
    {
    Symbol: "FLS",
    CompanyName: "Flowserve Corporation Common Stock"
    },
    {
    Symbol: "FLT",
    CompanyName: "FleetCor Technologies, Inc. Common Stock"
    },
    {
    Symbol: "FLTX",
    CompanyName: "Fleetmatics Group PLC Ordinary Shares"
    },
    {
    Symbol: "FLY",
    CompanyName: "Fly Leasing Limited"
    },
    {
    Symbol: "FMC",
    CompanyName: "FMC Corporation Common Stock"
    },
    {
    Symbol: "FMD",
    CompanyName: "First Marblehead Corporation (The) Common Stock"
    },
    {
    Symbol: "FMER$A",
    CompanyName: "FirstMerit Corporation Depositary Shares"
    },
    {
    Symbol: "FMN",
    CompanyName: "Federated Premier Municipal Income Fund Federated Premier Municipal Income Fund"
    },
    {
    Symbol: "FMO",
    CompanyName: "Fiduciary/Claymore MLP Opportunity Fund Fiduciary/Claymore MLP Opportunity Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "FMS",
    CompanyName: "Fresenius Medical Care AG Common Stock"
    },
    {
    Symbol: "FMSA",
    CompanyName: "FMSA Holdings Inc. Common Stock"
    },
    {
    Symbol: "FMX",
    CompanyName: "Fomento Economico Mexicano S.A.B. de C.V. Common Stock"
    },
    {
    Symbol: "FMY",
    CompanyName: "First Trust Motgage Income Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "FN",
    CompanyName: "Fabrinet Ordinary Shares"
    },
    {
    Symbol: "FNB",
    CompanyName: "F.N.B. Corporation Common Stock"
    },
    {
    Symbol: "FNB$E",
    CompanyName: "F.N.B. Corporation Depositary Shares, each representing a 1/40th interest in a share of Fixed"
    },
    {
    Symbol: "FNF",
    CompanyName: "FNF Group of Fidelity National Financial, Inc. Common Stock"
    },
    {
    Symbol: "FNFG$B",
    CompanyName: "First Niagara Financial Group Inc. PFD NON CUM SER B FXD/FLTG"
    },
    {
    Symbol: "FNFV",
    CompanyName: "FNFV Group of Fidelity National Financial, Inc. Common Stock"
    },
    {
    Symbol: "FNV",
    CompanyName: "Franco"
    },
    {
    Symbol: "FOE",
    CompanyName: "Ferro Corporation Common Stock"
    },
    {
    Symbol: "FOF",
    CompanyName: "Cohen & Steers Closed"
    },
    {
    Symbol: "FOR",
    CompanyName: "Forestar Group Inc Common Stock"
    },
    {
    Symbol: "FPF",
    CompanyName: "First Trust Intermediate Duration Preferred & Income Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "FPL",
    CompanyName: "First Trust New Opportunities MLP & Energy Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "FPO",
    CompanyName: "First Potomac Realty Trust Common Shares of Beneficial Interest"
    },
    {
    Symbol: "FPO$A",
    CompanyName: "First Potomac Realty Trust CUMULATIVE REDEEMABLE PFD PERPETUAL SER A"
    },
    {
    Symbol: "FPT",
    CompanyName: "Federated Premier Intermediate Municipal Income Fund Federated Premier Intermediate Municipal Income Fund"
    },
    {
    Symbol: "FR",
    CompanyName: "First Industrial Realty Trust, Inc. Common Stock"
    },
    {
    Symbol: "FRA",
    CompanyName: "Blackrock Floating Rate Income Strategies Fund Inc Common Stock"
    },
    {
    Symbol: "FRC",
    CompanyName: "FIRST REPUBLIC BANK Common Stock"
    },
    {
    Symbol: "FRC$A",
    CompanyName: "First Republicbank Corp DEP SHS REPSTG 1/40TH PERP PFD SER A"
    },
    {
    Symbol: "FRC$B",
    CompanyName: "First Republic Bank Depositary Shares Representing 1/40th Perpetual Preferred Series B"
    },
    {
    Symbol: "FRC$C",
    CompanyName: "FIRST REPUBLIC BANK Dep Shs Repstg 1/40th Perp Pfd Ser C"
    },
    {
    Symbol: "FRC$D",
    CompanyName: "First Republic Bank San Francisco California Depositary Shares Representing 1/40th Perpetual Preferred Series D"
    },
    {
    Symbol: "FRC$E",
    CompanyName: "FIRST REPUBLIC BANK Depositary Shs Repstg 1/40th Perp Pfd Ser E Fixed To Fltg (RATE)"
    },
    {
    Symbol: "FRM",
    CompanyName: "Furmanite Corporation Common Stock"
    },
    {
    Symbol: "FRO",
    CompanyName: "Frontline Ltd. Ordinary Shares"
    },
    {
    Symbol: "FRT",
    CompanyName: "Federal Realty Investment Trust Common Stock"
    },
    {
    Symbol: "FSCE",
    CompanyName: "Fifth Street Finance Corp. 5.875% Senior Notes due 2024"
    },
    {
    Symbol: "FSD",
    CompanyName: "First Trust High Income Long Short Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "FSIC",
    CompanyName: "FS Investment Corporation Common Stock"
    },
    {
    Symbol: "FSL",
    CompanyName: "Freescale Semiconductor, Ltd Common Shares"
    },
    {
    Symbol: "FSM",
    CompanyName: "Fortuna Silver Mines Inc Ordinary Shares (Canada)"
    },
    {
    Symbol: "FSS",
    CompanyName: "Federal Signal Corporation Common Stock"
    },
    {
    Symbol: "FT",
    CompanyName: "Franklin Universal Trust Common Stock"
    },
    {
    Symbol: "FTI",
    CompanyName: "FMC Technologies, Inc. Common Stock"
    },
    {
    Symbol: "FTK",
    CompanyName: "Flotek Industries, Inc. Common Stock"
    },
    {
    Symbol: "FTT",
    CompanyName: "Federated Enhanced Treasury Income Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "FUL",
    CompanyName: "H. B. Fuller Company Common Stock"
    },
    {
    Symbol: "FUN",
    CompanyName: "Cedar Fair, L.P. Common Stock"
    },
    {
    Symbol: "FUR",
    CompanyName: "Winthrop Realty Trust New Common Stock"
    },
    {
    Symbol: "FVE",
    CompanyName: "Five Star Quality Care, Inc. Common Stock"
    },
    {
    Symbol: "FXCM",
    CompanyName: "FXCM Inc. Class A Common Stock"
    },
    {
    Symbol: "G",
    CompanyName: "Genpact Limited Common Stock"
    },
    {
    Symbol: "GAB",
    CompanyName: "Gabelli Equity Trust, Inc. (The) Common Stock"
    },
    {
    Symbol: "GAB$D",
    CompanyName: "Gabelli Equity Trust, Inc. (The) Preferred Stock Series D"
    },
    {
    Symbol: "GAB$G",
    CompanyName: "Gabelli Equity Trust, Inc. (The) Series G Cumulative Preferred Stock"
    },
    {
    Symbol: "GAB$H",
    CompanyName: "Gabelli Equity Trust, Inc. (The) Pfd Ser H"
    },
    {
    Symbol: "GAM",
    CompanyName: "General American Investors, Inc. Common Stock"
    },
    {
    Symbol: "GAM$B",
    CompanyName: "General American Investors Company, Inc. Cumulative Preferred Stock"
    },
    {
    Symbol: "GAS",
    CompanyName: "AGL Resources, Inc. Common Stock"
    },
    {
    Symbol: "GB",
    CompanyName: "Greatbatch, Inc. Common Stock"
    },
    {
    Symbol: "GBAB",
    CompanyName: "Guggenheim Build America Bonds Managed Duration Trust Common Shares of Beneficial Interest"
    },
    {
    Symbol: "GBL",
    CompanyName: "Gamco Investors, Inc. Common Stock"
    },
    {
    Symbol: "GBX",
    CompanyName: "Greenbrier Companies, Inc. (The) Common Stock"
    },
    {
    Symbol: "GCA",
    CompanyName: "Global Cash Access Holdings, Inc. Common Stock"
    },
    {
    Symbol: "GCAP",
    CompanyName: "GAIN Capital Holdings, Inc. Common Stock"
    },
    {
    Symbol: "GCH",
    CompanyName: "Aberdeen Greater China Fund, Inc. Common Stock"
    },
    {
    Symbol: "GCI",
    CompanyName: "Gannett Co., Inc. Common Stock"
    },
    {
    Symbol: "GCO",
    CompanyName: "Genesco Inc. Common Stock"
    },
    {
    Symbol: "GCV",
    CompanyName: "Gabelli Convertible and Income Securities Fund, Inc. (The) Common Stock"
    },
    {
    Symbol: "GCV$B",
    CompanyName: "Gabelli Convertible and Income Securities Fund, Inc. (The) Series B 6.00% Cumulative Preferred Stock"
    },
    {
    Symbol: "GD",
    CompanyName: "General Dynamics Corporation Common Stock"
    },
    {
    Symbol: "GDF",
    CompanyName: "Western Asset Global Partners Income Fund, Inc. Common Stock"
    },
    {
    Symbol: "GDL",
    CompanyName: "GDL Fund, The Common Shares of Beneficial Interest"
    },
    {
    Symbol: "GDL$B",
    CompanyName: "The GDL Fund Series B Cumulative Puttable and Callable Preferred Shares"
    },
    {
    Symbol: "GDO",
    CompanyName: "Western Asset Global Corporate Defined Opportunity Fund Inc. Western Asset Global Corporate Defined Opportunity Fund Inc."
    },
    {
    Symbol: "GDOT",
    CompanyName: "Green Dot Corporation Class A Common Stock, $0.001 par value"
    },
    {
    Symbol: "GDP",
    CompanyName: "Goodrich Petroleum Corporation Common Stock"
    },
    {
    Symbol: "GDP$C",
    CompanyName: "Goodrich Petroleum Corporation Depositary Shares Representing 1/1000th Preferred Series C"
    },
    {
    Symbol: "GDP$D",
    CompanyName: "Goodrich Petroleum Corporation Depositary Shares Representing 1/1000th Preferred Series D"
    },
    {
    Symbol: "GDV",
    CompanyName: "Gabelli Dividend & Income Trust Common Shares of Beneficial Interest"
    },
    {
    Symbol: "GDV$A",
    CompanyName: "Gabelli Dividend & Income Tr Preferred Series A"
    },
    {
    Symbol: "GDV$D",
    CompanyName: "Gabelli Dividend Pfd Series D"
    },
    {
    Symbol: "GE",
    CompanyName: "General Electric Company Common Stock"
    },
    {
    Symbol: "GEB",
    CompanyName: "General Electric Company 4.875% Notes due October 15, 2052"
    },
    {
    Symbol: "GEF",
    CompanyName: "Greif Inc. Class A Common Stock"
    },
    {
    Symbol: "GEF.B",
    CompanyName: "Greif, Inc. Corporation Class B Common Stock"
    },
    {
    Symbol: "GEH",
    CompanyName: "General Electric Capital Corporation 4.876% Notes due January 29, 2053"
    },
    {
    Symbol: "GEK",
    CompanyName: "General Electric Capital Corporation 4.70% Notes due May 16, 2053"
    },
    {
    Symbol: "GEL",
    CompanyName: "Genesis Energy, L.P. Common Units"
    },
    {
    Symbol: "GEO",
    CompanyName: "Geo Group Inc (The) REIT"
    },
    {
    Symbol: "GEQ",
    CompanyName: "Guggenheim Equal Weight Enhanced Equity Income Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "GER",
    CompanyName: "Goldman Sachs MLP Energy Renaissance Fund"
    },
    {
    Symbol: "GES",
    CompanyName: "Guess?, Inc. Common Stock"
    },
    {
    Symbol: "GF",
    CompanyName: "New Germany Fund, Inc. (The) Common Stock"
    },
    {
    Symbol: "GFA",
    CompanyName: "Gafisa SA Gafisa S.A. American Depositary Shares"
    },
    {
    Symbol: "GFF",
    CompanyName: "Griffon Corporation Common Stock"
    },
    {
    Symbol: "GFI",
    CompanyName: "Gold Fields Limited American Depositary Shares"
    },
    {
    Symbol: "GFIG",
    CompanyName: "GFI Group Inc. Common Stock"
    },
    {
    Symbol: "GFY",
    CompanyName: "Western Asset Variable Rate Strategic Fund Inc. Common Stock"
    },
    {
    Symbol: "GG",
    CompanyName: "Goldcorp Inc. Common Stock"
    },
    {
    Symbol: "GGB",
    CompanyName: "Gerdau S.A. Common Stock"
    },
    {
    Symbol: "GGE",
    CompanyName: "Guggenheim Enhanced Equity Strategy Fund"
    },
    {
    Symbol: "GGG",
    CompanyName: "Graco Inc. Common Stock"
    },
    {
    Symbol: "GGM",
    CompanyName: "Guggenheim Credit Allocation Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "GGP",
    CompanyName: "General Growth Properties, Inc. Common Stock"
    },
    {
    Symbol: "GGP$A",
    CompanyName: "General Growth Properties, Inc. Preferred Series A"
    },
    {
    Symbol: "GGT",
    CompanyName: "Gabelli Multi"
    },
    {
    Symbol: "GGT$B",
    CompanyName: "Gabelli Multi"
    },
    {
    Symbol: "GGZ",
    CompanyName: "Gabelli Global Small and Mid Cap Value Trust (The) Common Shares of Beneficial Interest"
    },
    {
    Symbol: "GHC",
    CompanyName: "Graham Holdings Company Common Stock"
    },
    {
    Symbol: "GHI",
    CompanyName: "Global High Income Fund, Inc. Common Stock"
    },
    {
    Symbol: "GHL",
    CompanyName: "Greenhill & Co., Inc. Common Stock"
    },
    {
    Symbol: "GHM",
    CompanyName: "Graham Corporation Common Stock"
    },
    {
    Symbol: "GHY",
    CompanyName: "Prudential Global Short Duration High Yield Fund, Inc. Common Stock"
    },
    {
    Symbol: "GIB",
    CompanyName: "CGI Group, Inc. Common Stock"
    },
    {
    Symbol: "GIL",
    CompanyName: "Gildan Activewear, Inc. Class A Sub. Vot. Common Stock"
    },
    {
    Symbol: "GIM",
    CompanyName: "Templeton Global Income Fund, Inc. Common Stock"
    },
    {
    Symbol: "GIMO",
    CompanyName: "Gigamon Inc. Common Stock"
    },
    {
    Symbol: "GIS",
    CompanyName: "General Mills, Inc. Common Stock"
    },
    {
    Symbol: "GJH",
    CompanyName: "Synthetic Fixed"
    },
    {
    Symbol: "GJO",
    CompanyName: "Synthetic Fixed"
    },
    {
    Symbol: "GJP",
    CompanyName: "Synthetic Fixed"
    },
    {
    Symbol: "GJR",
    CompanyName: "Synthetic Fixed"
    },
    {
    Symbol: "GJS",
    CompanyName: "Goldman Sachs Group Securities STRATS Trust for Goldman Sachs Group Securities, Series 2006"
    },
    {
    Symbol: "GJT",
    CompanyName: "Synthetic Fixed"
    },
    {
    Symbol: "GJV",
    CompanyName: "Synthetic Fixed"
    },
    {
    Symbol: "GLF",
    CompanyName: "GulfMark Offshore, Inc. New Common Stock"
    },
    {
    Symbol: "GLOB",
    CompanyName: "Globant S.A. Common Shares"
    },
    {
    Symbol: "GLOG",
    CompanyName: "GasLog Ltd. Common Shares"
    },
    {
    Symbol: "GLOP",
    CompanyName: "GasLog Partners LP Common Units representing limited partnership interests"
    },
    {
    Symbol: "GLP",
    CompanyName: "Global Partners LP Global Partners LP Common Units representing Limited Partner Interests"
    },
    {
    Symbol: "GLPW",
    CompanyName: "Global Power Equipment Group Inc Common Stock"
    },
    {
    Symbol: "GLT",
    CompanyName: "Glatfelter Common Stock"
    },
    {
    Symbol: "GLW",
    CompanyName: "Corning Incorporated Common Stock"
    },
    {
    Symbol: "GM",
    CompanyName: "General Motors Company Common Stock"
    },
    {
    Symbol: "GM.A",
    CompanyName: "General Motors Company Warrant (Expires 07/10/2016)"
    },
    {
    Symbol: "GM.B",
    CompanyName: "General Motors Company Warrant (Expires 07/10/2019)"
    },
    {
    Symbol: "GM.C",
    CompanyName: "General Motors Company Warrants (expiring December 31, 2015)"
    },
    {
    Symbol: "GME",
    CompanyName: "Gamestop Corporation Common Stock"
    },
    {
    Symbol: "GMED",
    CompanyName: "Globus Medical, Inc. Class A Common Stock"
    },
    {
    Symbol: "GMK",
    CompanyName: "GRUMA, S.A.B de C.V. Common Stock"
    },
    {
    Symbol: "GMT",
    CompanyName: "GATX Corporation Common Stock"
    },
    {
    Symbol: "GMZ",
    CompanyName: "Goldman Sachs MLP Income Opportunities Fund"
    },
    {
    Symbol: "GNC",
    CompanyName: "GNC Holdings, Inc. Class A Common Stock"
    },
    {
    Symbol: "GNE",
    CompanyName: "Genie Energy Ltd. Class B Common Stock Stock"
    },
    {
    Symbol: "GNE$A",
    CompanyName: "Genie Energy Ltd. Series 2012"
    },
    {
    Symbol: "GNI",
    CompanyName: "Great Northern Iron Ore Properties Common Stock"
    },
    {
    Symbol: "GNRC",
    CompanyName: "Generac Holdlings Inc. Common Stock"
    },
    {
    Symbol: "GNT",
    CompanyName: "GAMCO Natural Resources, Gold & Income Trust"
    },
    {
    Symbol: "GNW",
    CompanyName: "Genworth Financial Inc Common Stock"
    },
    {
    Symbol: "GOF",
    CompanyName: "Guggenheim Strategic Opportunities Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "GOL",
    CompanyName: "Gol Linhas Aereas Inteligentes S.A. Sponsored ADR representing Pfd Shares"
    },
    {
    Symbol: "GOV",
    CompanyName: "Government Properties Income Trust Common Shares of Beneficial Interest"
    },
    {
    Symbol: "GPC",
    CompanyName: "Genuine Parts Company Common Stock"
    },
    {
    Symbol: "GPE$A",
    CompanyName: "Georgia Power Company Georgia Power Company 6 1/8% Series Class A Preferred Stock, Non"
    },
    {
    Symbol: "GPI",
    CompanyName: "Group 1 Automotive, Inc. Common Stock"
    },
    {
    Symbol: "GPK",
    CompanyName: "Graphic Packaging Holding Company"
    },
    {
    Symbol: "GPM",
    CompanyName: "Guggenheim Enhanced Equity Income Fund"
    },
    {
    Symbol: "GPN",
    CompanyName: "Global Payments Inc. Common Stock"
    },
    {
    Symbol: "GPRK",
    CompanyName: "Geopark Ltd Common Shares"
    },
    {
    Symbol: "GPS",
    CompanyName: "Gap, Inc. (The) Common Stock"
    },
    {
    Symbol: "GPT",
    CompanyName: "Gramercy Property Trust Inc. Common Stock"
    },
    {
    Symbol: "GPT$B",
    CompanyName: "Gramercy Property Trust Inc. Preferred Series B"
    },
    {
    Symbol: "GPX",
    CompanyName: "GP Strategies Corporation Common Stock"
    },
    {
    Symbol: "GRA",
    CompanyName: "W.R. Grace & Co. Common Stock"
    },
    {
    Symbol: "GRAM",
    CompanyName: "Grana y Montero S.A.A. American Depositary Shares, each representing five Common Shares"
    },
    {
    Symbol: "GRO",
    CompanyName: "Agria Corporation American Depositary Shares"
    },
    {
    Symbol: "GRP.U",
    CompanyName: "Granite Real Estate Inc. Stapled Units, each consisting of one unit of Granite Real Estate Trust and one common share of Granite REIT Inc."
    },
    {
    Symbol: "GRR",
    CompanyName: "Asia Tigers Fund, Inc. (The) Common Stock"
    },
    {
    Symbol: "GRT",
    CompanyName: "Glimcher Realty Trust Common Stock"
    },
    {
    Symbol: "GRT$G",
    CompanyName: "Glimcher Realty Trust Preferred Shares of Beneficial Interest Series G"
    },
    {
    Symbol: "GRT$H",
    CompanyName: "Glimcher Reatly Tr Pfd Sh Ben Int Ser H %"
    },
    {
    Symbol: "GRT$I",
    CompanyName: "Glimcher Realty Trust 6.875% Cumulative Redeemable Preferred Shares of Beneficial Interest"
    },
    {
    Symbol: "GRUB",
    CompanyName: "GrubHub Inc. Common Stock"
    },
    {
    Symbol: "GRX",
    CompanyName: "The Gabelli Healthcare & Wellness Trust Common Shares of Beneficial Interest"
    },
    {
    Symbol: "GRX$A",
    CompanyName: "Gabelli Healthcare PFD SER A"
    },
    {
    Symbol: "GRX$B",
    CompanyName: "Gabelli Healthcare Preferred Series B"
    },
    {
    Symbol: "GS",
    CompanyName: "Goldman Sachs Group, Inc. (The) Common Stock"
    },
    {
    Symbol: "GS$A",
    CompanyName: "Goldman Sachs Group, Inc. (The) Depositary Shares each representing 1/1000th Interest in a Share of Floating Rate Non"
    },
    {
    Symbol: "GS$B",
    CompanyName: "Goldman Sachs Group, Inc. (The) Depositary Share repstg 1/1000th Preferred Series B"
    },
    {
    Symbol: "GS$C",
    CompanyName: "Goldman Sachs Group, Inc. (The) Depositary Share repstg 1/1000th Preferred Series C"
    },
    {
    Symbol: "GS$D",
    CompanyName: "Goldman Sachs Group, Inc. (The) Dep Shs repstg 1/1000 Pfd Ser D Fltg"
    },
    {
    Symbol: "GS$I",
    CompanyName: "Goldman Sachs Group, Inc. (The) Perpetual Preferred Series I"
    },
    {
    Symbol: "GS$J",
    CompanyName: "Goldman Sachs Group Inc Depositary Shs Repstg 1/1000th Pfd Ser J Fixed to Fltg Rate"
    },
    {
    Symbol: "GS$K",
    CompanyName: "Goldman Sachs Group, Inc. (The) Dep Shs Repstg 1/1000 Int Sh Fxd/Fltg Non Cum Pfd Stk Ser K"
    },
    {
    Symbol: "GSF",
    CompanyName: "Goldman Sachs Group, Inc. (The) 6.125% Notes due 2060"
    },
    {
    Symbol: "GSH",
    CompanyName: "Guangshen Railway Company Limited Common Stock"
    },
    {
    Symbol: "GSI",
    CompanyName: "General Steel Holdings, Inc. Common Stock"
    },
    {
    Symbol: "GSJ",
    CompanyName: "Goldman Sachs Group, Inc. (The) 6.50% Notes due 2061"
    },
    {
    Symbol: "GSK",
    CompanyName: "GlaxoSmithKline PLC Common Stock"
    },
    {
    Symbol: "GSL",
    CompanyName: "Global Ship Lease Inc New Class A Common Shares"
    },
    {
    Symbol: "GSL$B",
    CompanyName: "Global Ship Lease, Inc. Depository Shares Representing 1/100th Perpetual Preferred Series B% (Marshall Island)"
    },
    {
    Symbol: "GTI",
    CompanyName: "GrafTech International Ltd (Holding Co.) Common Stock"
    },
    {
    Symbol: "GTN",
    CompanyName: "Gray Communications Systems, Inc. Common Stock"
    },
    {
    Symbol: "GTN.A",
    CompanyName: "Gray Television, Inc. CLass A Common Stock"
    },
    {
    Symbol: "GTS",
    CompanyName: "Triple"
    },
    {
    Symbol: "GTT",
    CompanyName: "GTT Communications, Inc. Common Stock"
    },
    {
    Symbol: "GTY",
    CompanyName: "Getty Realty Corporation Common Stock"
    },
    {
    Symbol: "GUA",
    CompanyName: "Gulf Power Company Series 2011A 5.75% Senior Notes due June 1, 2051"
    },
    {
    Symbol: "GUT",
    CompanyName: "Gabelli Utility Trust (The) Common Stock"
    },
    {
    Symbol: "GUT$A",
    CompanyName: "Gabelli Utility Trust (The) 5.625% Series A Cumulative Preferred Shares"
    },
    {
    Symbol: "GVA",
    CompanyName: "Granite Construction Incorporated Common Stock"
    },
    {
    Symbol: "GWB",
    CompanyName: "Great Western Bancorp, Inc. Common Stock"
    },
    {
    Symbol: "GWR",
    CompanyName: "Genesee & Wyoming Inc. Class A Common Stock"
    },
    {
    Symbol: "GWRE",
    CompanyName: "Guidewire Software, Inc. Common Stock"
    },
    {
    Symbol: "GWRU",
    CompanyName: "Genesee & Wyoming, Inc. Tangible Equity Unit"
    },
    {
    Symbol: "GWW",
    CompanyName: "W.W. Grainger, Inc. Common Stock"
    },
    {
    Symbol: "GXP",
    CompanyName: "Great Plains Energy Incorporated Common Stock"
    },
    {
    Symbol: "GXP$A",
    CompanyName: "Great Plains Energy Incorporated Preferred Stock"
    },
    {
    Symbol: "GXP$D",
    CompanyName: "Great Plains Energy Incorporated Preferred Stock"
    },
    {
    Symbol: "GXP$E",
    CompanyName: "Great Plains Energy Incorporated Preferred Stock"
    },
    {
    Symbol: "GY",
    CompanyName: "GenCorp Inc. Common Stock"
    },
    {
    Symbol: "GYB",
    CompanyName: "CABCO Series 2004"
    },
    {
    Symbol: "GYC",
    CompanyName: "Corporate Asset Backed Corp CABCO Corporate Asset Backed Corporation CABCO Series 2004"
    },
    {
    Symbol: "GZT",
    CompanyName: "Gazit"
    },
    {
    Symbol: "H",
    CompanyName: "Hyatt Hotels Corporation Class A Common Stock"
    },
    {
    Symbol: "HAE",
    CompanyName: "Haemonetics Corporation Common Stock"
    },
    {
    Symbol: "HAL",
    CompanyName: "Halliburton Company Common Stock"
    },
    {
    Symbol: "HAR",
    CompanyName: "Harman International Industries, Incorporated Common Stock"
    },
    {
    Symbol: "HASI",
    CompanyName: "Hannon Armstrong Sustainable Infrastructure Capital, Inc. Common Stock"
    },
    {
    Symbol: "HBI",
    CompanyName: "Hanesbrands Inc. Common Stock"
    },
    {
    Symbol: "HBM",
    CompanyName: "Hudbay Minerals Inc Ordinary Shares (Canada)"
    },
    {
    Symbol: "HBM.W",
    CompanyName: "HudBay Minerals Inc Warrants Expiring 07/20/2018 (Canada)"
    },
    {
    Symbol: "HCA",
    CompanyName: "HCA Holdings, Inc. Common Stock"
    },
    {
    Symbol: "HCC",
    CompanyName: "HCC Insurance Holdings, Inc. Common Stock"
    },
    {
    Symbol: "HCI",
    CompanyName: "HCI Group, Inc. Common Stock"
    },
    {
    Symbol: "HCJ",
    CompanyName: "HCI Group, Inc. 8% Senior Notes due 2020"
    },
    {
    Symbol: "HCLP",
    CompanyName: "Hi"
    },
    {
    Symbol: "HCN",
    CompanyName: "Health Care REIT, Inc. Common Stock"
    },
    {
    Symbol: "HCN$I",
    CompanyName: "Health Care REIT, Inc. PFD PERPETUAL CONV SER I"
    },
    {
    Symbol: "HCN$J",
    CompanyName: "HEALTH CARE REIT INC Preferred Stock 6.5% PFD SERIES J"
    },
    {
    Symbol: "HCP",
    CompanyName: "HCP, Inc. Common Stock"
    },
    {
    Symbol: "HD",
    CompanyName: "Home Depot, Inc. (The) Common Stock"
    },
    {
    Symbol: "HDB",
    CompanyName: "HDFC Bank Limited Common Stock"
    },
    {
    Symbol: "HDY",
    CompanyName: "HyperDynamics Corporation Common Stock"
    },
    {
    Symbol: "HE",
    CompanyName: "Hawaiian Electric Industries, Inc. Common Stock"
    },
    {
    Symbol: "HE$U",
    CompanyName: "Hawaiian Electric Industries, Inc. 6.5 % Cum QUIPS"
    },
    {
    Symbol: "HEI",
    CompanyName: "Heico Corporation Common Stock"
    },
    {
    Symbol: "HEI.A",
    CompanyName: "Heico Corporation Common Stock"
    },
    {
    Symbol: "HELI",
    CompanyName: "CHC Group Ltd. Ordinary Shares"
    },
    {
    Symbol: "HEP",
    CompanyName: "Holly Energy Partners, L.P. Common Stock"
    },
    {
    Symbol: "HEQ",
    CompanyName: "John Hancock Hedged Equity & Income Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "HES",
    CompanyName: "Hess Corporation Common Stock"
    },
    {
    Symbol: "HF",
    CompanyName: "HFF, Inc. Common Stock, Class A"
    },
    {
    Symbol: "HFC",
    CompanyName: "HollyFrontier Corporation Common Stock"
    },
    {
    Symbol: "HGG",
    CompanyName: "HHGregg, Inc. Common Stock"
    },
    {
    Symbol: "HGH",
    CompanyName: "Hartford Financial Services Group, Inc. (The) 7.875% Fixed to Floating Rate Junior Subordinated Debentures due 2042"
    },
    {
    Symbol: "HGR",
    CompanyName: "Hanger, Inc. Common Stock ($0.01 Par Value)"
    },
    {
    Symbol: "HGT",
    CompanyName: "Hugoton Royalty Trust Common Stock"
    },
    {
    Symbol: "HHC",
    CompanyName: "Howard Hughes Corporation (The) Common Stock"
    },
    {
    Symbol: "HHS",
    CompanyName: "Harte"
    },
    {
    Symbol: "HHY",
    CompanyName: "Brookfield High Income Fund Inc."
    },
    {
    Symbol: "HI",
    CompanyName: "Hillenbrand Inc Common Stock"
    },
    {
    Symbol: "HIE",
    CompanyName: "Miller/Howard High Income Equity Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "HIG",
    CompanyName: "Hartford Financial Services Group, Inc. (The) Common Stock"
    },
    {
    Symbol: "HIG.W",
    CompanyName: "Hartford Financial Services Group, Inc. (The) Warrants expiring June 26, 2019"
    },
    {
    Symbol: "HII",
    CompanyName: "Huntington Ingalls Industries, Inc. Common Stock"
    },
    {
    Symbol: "HIL",
    CompanyName: "Hill International, Inc. Common Stock"
    },
    {
    Symbol: "HIO",
    CompanyName: "Western Asset High Income Opportunity Fund, Inc. Common Stock"
    },
    {
    Symbol: "HIVE",
    CompanyName: "Aerohive Networks, Inc. Common Stock"
    },
    {
    Symbol: "HIW",
    CompanyName: "Highwoods Properties, Inc. Common Stock"
    },
    {
    Symbol: "HIX",
    CompanyName: "Western Asset High Income Fund II Inc. Common Stock"
    },
    {
    Symbol: "HJV",
    CompanyName: "MS Structured Asset Corp MS Structured Asset Corp. SATURNS J.C. Penney Company, Inc. Debenture Backed Series 2007"
    },
    {
    Symbol: "HK",
    CompanyName: "Halcon Resources Corporation Common Stock"
    },
    {
    Symbol: "HL",
    CompanyName: "Hecla Mining Company Common Stock"
    },
    {
    Symbol: "HL$B",
    CompanyName: "Hecla Mining Company Preferred Stock"
    },
    {
    Symbol: "HLF",
    CompanyName: "Herbalife Ltd. Common Stock"
    },
    {
    Symbol: "HLS",
    CompanyName: "HealthSouth Corporation Common Stock"
    },
    {
    Symbol: "HLT",
    CompanyName: "Hilton Worldwide Holdings Inc. Common Stock"
    },
    {
    Symbol: "HLX",
    CompanyName: "Helix Energy Solutions Group, Inc. Common Stock"
    },
    {
    Symbol: "HMC",
    CompanyName: "Honda Motor Company, Ltd. Common Stock"
    },
    {
    Symbol: "HME",
    CompanyName: "Home Properties, Inc. Common Stock"
    },
    {
    Symbol: "HMLP",
    CompanyName: "Hoegh LNG Partners LP Common Units representing Limited Partner Interests"
    },
    {
    Symbol: "HMN",
    CompanyName: "Horace Mann Educators Corporation Common Stock"
    },
    {
    Symbol: "HMY",
    CompanyName: "Harmony Gold Mining Company Limited"
    },
    {
    Symbol: "HNI",
    CompanyName: "HNI Corporation Common Stock"
    },
    {
    Symbol: "HNP",
    CompanyName: "Huaneng Power Intl Common Stock"
    },
    {
    Symbol: "HNR",
    CompanyName: "Harvest Natural Resources Inc"
    },
    {
    Symbol: "HNT",
    CompanyName: "Health Net Inc. Common Stock"
    },
    {
    Symbol: "HOG",
    CompanyName: "Harley"
    },
    {
    Symbol: "HON",
    CompanyName: "Honeywell International Inc. Common Stock"
    },
    {
    Symbol: "HOS",
    CompanyName: "Hornbeck Offshore Services Common Stock"
    },
    {
    Symbol: "HOT",
    CompanyName: "Starwood Hotels & Resorts Worldwide, Inc. Common Stock"
    },
    {
    Symbol: "HOV",
    CompanyName: "Hovnanian Enterprises, Inc. Class A Common Stock"
    },
    {
    Symbol: "HP",
    CompanyName: "Helmerich & Payne, Inc. Common Stock"
    },
    {
    Symbol: "HPF",
    CompanyName: "John Hancock Pfd Income Fund II Pfd Income Fund II"
    },
    {
    Symbol: "HPI",
    CompanyName: "John Hancock Preferred Income Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "HPP",
    CompanyName: "Hudson Pacific Properties, Inc. Common Stock"
    },
    {
    Symbol: "HPP$B",
    CompanyName: "Hudson Pacific Properties, Inc. 8.375% Series B Cumulative Redeemable Preferred shares"
    },
    {
    Symbol: "HPQ",
    CompanyName: "Hewlett"
    },
    {
    Symbol: "HPS",
    CompanyName: "John Hancock Preferred Income Fund III Preferred Income Fund III"
    },
    {
    Symbol: "HPT",
    CompanyName: "Hospitality Properites Trust Common Stock"
    },
    {
    Symbol: "HPT$D",
    CompanyName: "Hospitality Properties Trust Preferred Stock"
    },
    {
    Symbol: "HPY",
    CompanyName: "Heartland Payment Systems, Inc. Common Stock"
    },
    {
    Symbol: "HQH",
    CompanyName: "Tekla Healthcare Investors Common Stock"
    },
    {
    Symbol: "HQL",
    CompanyName: "TeklaLife Sciences Investors Common Stock"
    },
    {
    Symbol: "HR",
    CompanyName: "Healthcare Realty Trust Incorporated Common Stock"
    },
    {
    Symbol: "HRB",
    CompanyName: "H&R Block, Inc. Common Stock"
    },
    {
    Symbol: "HRC",
    CompanyName: "Hill"
    },
    {
    Symbol: "HRG",
    CompanyName: "Harbinger Group Inc Common Stock"
    },
    {
    Symbol: "HRL",
    CompanyName: "Hormel Foods Corporation Common Stock"
    },
    {
    Symbol: "HRS",
    CompanyName: "Harris Corporation Common Stock"
    },
    {
    Symbol: "HRTG",
    CompanyName: "Heritage Insurance Holdings, Inc. Common Stock"
    },
    {
    Symbol: "HSBC",
    CompanyName: "HSBC Holdings, plc. Common Stock"
    },
    {
    Symbol: "HSBC$A",
    CompanyName: "HSBC Holdings, plc. ADR SER A REP 1/40 PFD SER A"
    },
    {
    Symbol: "HSC",
    CompanyName: "Harsco Corporation Common Stock"
    },
    {
    Symbol: "HSEA",
    CompanyName: "HSBC Holdings, plc. Perpetual Sub Cap Secs"
    },
    {
    Symbol: "HSEB",
    CompanyName: "HSBC Holdings plc PERP SUB CAP SECS EXCH PREF SHS SER 2 (United Kingdom)"
    },
    {
    Symbol: "HSFC$B",
    CompanyName: "HSBC Finance Corp Dep. Shares reptsg 1/40 Preferred Series B"
    },
    {
    Symbol: "HSP",
    CompanyName: "Hospira Inc"
    },
    {
    Symbol: "HST",
    CompanyName: "Host Hotels & Resorts, Inc. Common Stock"
    },
    {
    Symbol: "HSY",
    CompanyName: "The Hershey Company Common Stock"
    },
    {
    Symbol: "HT",
    CompanyName: "Hersha Hospitality Trust Class A Common Shares of Beneficial Interest"
    },
    {
    Symbol: "HT$B",
    CompanyName: "Hersha Hospitality Trust PFD SER B"
    },
    {
    Symbol: "HT$C",
    CompanyName: "Hersha Hospitality Trust 6.875% Series C Cumulative Redeemable Preferred Shares of Beneficial Interest"
    },
    {
    Symbol: "HTA",
    CompanyName: "Healthcare Trust of America, Inc. Class A Common Stock"
    },
    {
    Symbol: "HTD",
    CompanyName: "John Hancock Tax Advantaged Dividend Income Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "HTF",
    CompanyName: "Horizon Technology Finance Corporation 7.375% Senior Notes due 2019"
    },
    {
    Symbol: "HTGC",
    CompanyName: "Hercules Technology Growth Capital, Inc. Common Stock"
    },
    {
    Symbol: "HTGX",
    CompanyName: "Hercules Technology Growth Capital, Inc. 6.25% Notes due 2024"
    },
    {
    Symbol: "HTGY",
    CompanyName: "Hercules Technology Growth Capital, Inc. 7.00% Senior Notes due 2019"
    },
    {
    Symbol: "HTGZ",
    CompanyName: "Hercules Technology Growth Capital, Inc. 7.00% Note due 2019"
    },
    {
    Symbol: "HTH",
    CompanyName: "Hilltop Holdings Inc."
    },
    {
    Symbol: "HTR",
    CompanyName: "Brookfield Total Return Fund Inc. (The) Common Stock"
    },
    {
    Symbol: "HTS",
    CompanyName: "Hatteras Financial Corp Hatteras Financial Corp Common Stock"
    },
    {
    Symbol: "HTS$A",
    CompanyName: "Hatteras Financial Corp Cum Redeemable Pfd Ser A"
    },
    {
    Symbol: "HTY",
    CompanyName: "John Hancock Tax"
    },
    {
    Symbol: "HTZ",
    CompanyName: "Hertz Global Holdings, Inc Common Stock"
    },
    {
    Symbol: "HUB.A",
    CompanyName: "Hubbell Inc A Common Stock"
    },
    {
    Symbol: "HUB.B",
    CompanyName: "Hubbell Inc Common Stock Class B"
    },
    {
    Symbol: "HUBS",
    CompanyName: "HubSpot, Inc. Common Stock"
    },
    {
    Symbol: "HUM",
    CompanyName: "Humana Inc. Common Stock"
    },
    {
    Symbol: "HUN",
    CompanyName: "Huntsman Corporation Common Stock"
    },
    {
    Symbol: "HUSI$D",
    CompanyName: "HSBC USA, Inc. Preferred Stock"
    },
    {
    Symbol: "HUSI$F",
    CompanyName: "HSBC USA, Inc. Preferred Series F Floating Rate"
    },
    {
    Symbol: "HUSI$G",
    CompanyName: "HSBC USA, Inc. Dep Shs repstg 1/40 Preferred Series G"
    },
    {
    Symbol: "HUSI$H",
    CompanyName: "HSBC USA, Inc. Depositary Sh repstg 1/40th Preferred Series H"
    },
    {
    Symbol: "HUSI$Z",
    CompanyName: "HSBC USA, Inc. Preferred Stock"
    },
    {
    Symbol: "HVB",
    CompanyName: "Hudson Valley Holding Corp. Common Stock"
    },
    {
    Symbol: "HVT",
    CompanyName: "Haverty Furniture Companies, Inc. Common Stock"
    },
    {
    Symbol: "HVT.A",
    CompanyName: "Haverty Furniture Companies, Inc. Common Stock"
    },
    {
    Symbol: "HW",
    CompanyName: "Headwaters Incorporated Common Stock"
    },
    {
    Symbol: "HXL",
    CompanyName: "Hexcel Corporation Common Stock"
    },
    {
    Symbol: "HY",
    CompanyName: "Hyster"
    },
    {
    Symbol: "HYB",
    CompanyName: "New America High Income Fund, Inc. (The) Common Stock"
    },
    {
    Symbol: "HYF",
    CompanyName: "Managed High Yield Plus Fund, Inc. Common Stock"
    },
    {
    Symbol: "HYH",
    CompanyName: "Halyard Health, Inc. Common Stock"
    },
    {
    Symbol: "HYI",
    CompanyName: "Western Asset High Yield Defined Opportunity Fund Inc. Common Stock"
    },
    {
    Symbol: "HYT",
    CompanyName: "Blackrock Corporate High Yield Fund, Inc. Common Stock"
    },
    {
    Symbol: "HZO",
    CompanyName: "MarineMax, Inc. Common Stock"
    },
    {
    Symbol: "I",
    CompanyName: "Intelsat S.A. Common Shares"
    },
    {
    Symbol: "I$A",
    CompanyName: "Intelsat S.A. Series A mandatory convefrtible junior non"
    },
    {
    Symbol: "IAE",
    CompanyName: "Voya Asia Pacific High Dividend Equity Income Fund ING Asia Pacific High Dividend Equity Income Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "IAG",
    CompanyName: "Iamgold Corporation Ordinary Shares"
    },
    {
    Symbol: "IBA",
    CompanyName: "Industrias Bachoco, S.A.B. de C.V. Common Stock"
    },
    {
    Symbol: "IBM",
    CompanyName: "International Business Machines Corporation Common Stock"
    },
    {
    Symbol: "IBN",
    CompanyName: "ICICI Bank Limited Common Stock"
    },
    {
    Symbol: "IBP",
    CompanyName: "Installed Building Products, Inc. Common Stock"
    },
    {
    Symbol: "ICA",
    CompanyName: "Empresas Ica Soc Contrladora Common Stock"
    },
    {
    Symbol: "ICB",
    CompanyName: "MS Income Securities, Inc. Common Stock"
    },
    {
    Symbol: "ICD",
    CompanyName: "Independence Contract Drilling, Inc. Common Stock"
    },
    {
    Symbol: "ICE",
    CompanyName: "Intercontinental Exchange Inc. Common Stock"
    },
    {
    Symbol: "ICL",
    CompanyName: "Israel Chemicals Limited Ordinary Shares"
    },
    {
    Symbol: "IDA",
    CompanyName: "IDACORP, Inc. Common Stock"
    },
    {
    Symbol: "IDE",
    CompanyName: "Voya Infrastructure, Industrials and Materials Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "IDG",
    CompanyName: "ING GROEP N V PREF CTF 7.3750% Perp Hybrid Cap Secs (Netherlands)"
    },
    {
    Symbol: "IDT",
    CompanyName: "IDT Corporation Class B Common Stock"
    },
    {
    Symbol: "IEH",
    CompanyName: "Integrys Energy Group 6.00% Junior Subordinated Notes Due 2073"
    },
    {
    Symbol: "IEX",
    CompanyName: "IDEX Corporation Common Stock"
    },
    {
    Symbol: "IFF",
    CompanyName: "Internationa Flavors & Fragrances, Inc. Common Stock"
    },
    {
    Symbol: "IFN",
    CompanyName: "India Fund, Inc. (The) Common Stock"
    },
    {
    Symbol: "IFT",
    CompanyName: "Imperial Holdings, Inc. Common Stock"
    },
    {
    Symbol: "IGA",
    CompanyName: "Voya Global Advantage and Premium Opportunity Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "IGD",
    CompanyName: "Voya Global Equity Dividend and Premium Opportunity Fund"
    },
    {
    Symbol: "IGI",
    CompanyName: "Western Asset Investment Grade Defined Opportunity Trust Inc. Common Stock"
    },
    {
    Symbol: "IGR",
    CompanyName: "CBRE Clarion Global Real Estate Income Fund Common Stock"
    },
    {
    Symbol: "IGT",
    CompanyName: "International Game Technology Common Stock"
    },
    {
    Symbol: "IHC",
    CompanyName: "Independence Holding Company Common Stock"
    },
    {
    Symbol: "IHD",
    CompanyName: "Voya Emerging Markets High Income Dividend Equity Fund Common Shares"
    },
    {
    Symbol: "IHG",
    CompanyName: "Intercontinental Hotels Group American Depositary Shares (Each representing one Ordinary Share)"
    },
    {
    Symbol: "IHS",
    CompanyName: "IHS Inc. IHS Inc. Class A Common Stock"
    },
    {
    Symbol: "IID",
    CompanyName: "Voya International High Dividend Equity Income Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "IIF",
    CompanyName: "Morgan Stanley India Investment Fund, Inc. Common Stock"
    },
    {
    Symbol: "IIM",
    CompanyName: "Invesco Value Municipal Income Trust Common Stock"
    },
    {
    Symbol: "IL",
    CompanyName: "IntraLinks Holdings, Inc. Common Stock $0.001 par value"
    },
    {
    Symbol: "IM",
    CompanyName: "Ingram Micro Inc. Common Stock"
    },
    {
    Symbol: "IMAX",
    CompanyName: "Imax Corporation Common Stock"
    },
    {
    Symbol: "IMN",
    CompanyName: "Imation Corporation Common Stock"
    },
    {
    Symbol: "IMPR",
    CompanyName: "Imprivata, Inc. Common Stock"
    },
    {
    Symbol: "IMPV",
    CompanyName: "Imperva, Inc. Common Stock"
    },
    {
    Symbol: "IMS",
    CompanyName: "IMS Health Holdings, Inc. Common Stock"
    },
    {
    Symbol: "INB",
    CompanyName: "Cohen & Steers Global Income Builder, Inc. Common Shares of Beneficial Interest"
    },
    {
    Symbol: "IND",
    CompanyName: "ING Group, N.V. Perpetual Debt Securities"
    },
    {
    Symbol: "INF",
    CompanyName: "Brookfield Global Listed Infrastructure Income Fund Closed End Fund"
    },
    {
    Symbol: "INFY",
    CompanyName: "Infosys Limited American Depositary Shares"
    },
    {
    Symbol: "ING",
    CompanyName: "ING Group, N.V. Common Stock"
    },
    {
    Symbol: "INGR",
    CompanyName: "Ingredion Incorporated Common Stock"
    },
    {
    Symbol: "INN",
    CompanyName: "Summit Hotel Properties, Inc. Common Stock"
    },
    {
    Symbol: "INN$A",
    CompanyName: "Summit Hotel Properties, Inc. 9.25% Series A Cumulative Redeemable Preferred Stock"
    },
    {
    Symbol: "INN$B",
    CompanyName: "Summit Hotel Properties, Inc. Pfd Ser B"
    },
    {
    Symbol: "INN$C",
    CompanyName: "Summit Hotel Properties, Inc. 7.125% Series C Cumulative Redeemable Preferred Stock"
    },
    {
    Symbol: "INT",
    CompanyName: "World Fuel Services Corporation Common Stock"
    },
    {
    Symbol: "INVN",
    CompanyName: "InvenSense, Inc. Common Stock"
    },
    {
    Symbol: "INXN",
    CompanyName: "InterXion Holding N.V. Ordinary Shares (0.01 nominal value)"
    },
    {
    Symbol: "INZ",
    CompanyName: "Ing Groep NV Perpetual Debt Securities"
    },
    {
    Symbol: "IO",
    CompanyName: "Ion Geophysical Corporation Common Stock"
    },
    {
    Symbol: "IOC",
    CompanyName: "InterOil Corporation"
    },
    {
    Symbol: "IP",
    CompanyName: "International Paper Company Common Stock"
    },
    {
    Symbol: "IPG",
    CompanyName: "Interpublic Group of Companies, Inc. (The) Common Stock"
    },
    {
    Symbol: "IPHI",
    CompanyName: "Inphi Corporation Common Stock $0.001 par value"
    },
    {
    Symbol: "IPI",
    CompanyName: "Intrepid Potash, Inc Common Stock"
    },
    {
    Symbol: "IPL$D",
    CompanyName: "Interstate Power & Light Company Perp Prd Ser D"
    },
    {
    Symbol: "IQI",
    CompanyName: "Invesco Quality Municipal Income Trust Common Stock"
    },
    {
    Symbol: "IR",
    CompanyName: "Ingersoll"
    },
    {
    Symbol: "IRC",
    CompanyName: "Inland Real Estate Corporation Common Stock"
    },
    {
    Symbol: "IRC$A",
    CompanyName: "Inland Real Estate Corporation 8.125% Series A Cumulative Redeemable Preferred Stock, $0.01 par value"
    },
    {
    Symbol: "IRC$B",
    CompanyName: "Inland Real Estate Corporation Redeemable Preferred Series B"
    },
    {
    Symbol: "IRE",
    CompanyName: "Governor and Company of the Bank of Ireland (The) Common Stock"
    },
    {
    Symbol: "IRET",
    CompanyName: "Investors Real Estate Trust Shares of Beneficial Interest"
    },
    {
    Symbol: "IRET$",
    CompanyName: "Investors Real Estate Trust Series A Cumulative Redeemable Preferred Shares of Beneficial Interest"
    },
    {
    Symbol: "IRET$B",
    CompanyName: "Investors Real Estate Trust 7.95% Series B Cumulative Redeemable Preferred Shares"
    },
    {
    Symbol: "IRF",
    CompanyName: "International Rectifier Corporation Common Stock"
    },
    {
    Symbol: "IRL",
    CompanyName: "New Ireland Fund, Inc (The) Common Stock"
    },
    {
    Symbol: "IRM",
    CompanyName: "Iron Mountain Incorporated (Delaware)Common Stock"
    },
    {
    Symbol: "IRR",
    CompanyName: "Voya Natural Resources Equity Income Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "IRS",
    CompanyName: "IRSA Inversiones Y Representaciones S.A. Common Stock"
    },
    {
    Symbol: "ISD",
    CompanyName: "Prudential Short Duration High Yield Fund, Inc. Common Stock"
    },
    {
    Symbol: "ISF",
    CompanyName: "ING Group, N.V. Perp Hybrid Cap Secs (Netherlands)"
    },
    {
    Symbol: "ISG",
    CompanyName: "ING Group, N.V. Perpetual Dent Secs 6.125%"
    },
    {
    Symbol: "ISH",
    CompanyName: "International Shipholding Corporation Common Stock"
    },
    {
    Symbol: "ISH$A",
    CompanyName: "International Shipholding Corporation Cumulative Redeemable Perpetual Preferred Series A"
    },
    {
    Symbol: "ISH$B",
    CompanyName: "International Shipholding Corporation PERP PFD SER B"
    },
    {
    Symbol: "ISP",
    CompanyName: "ING Groep NV 6.20% Perpetual Debt Securities (Netherlands)"
    },
    {
    Symbol: "IT",
    CompanyName: "Gartner, Inc. Common Stock"
    },
    {
    Symbol: "ITC",
    CompanyName: "ITC Holdings Corp. Common Stock"
    },
    {
    Symbol: "ITG",
    CompanyName: "Investment Technology Group, Inc. Common Stock"
    },
    {
    Symbol: "ITT",
    CompanyName: "ITT Corporation Common Stock New"
    },
    {
    Symbol: "ITUB",
    CompanyName: "Itau Unibanco Banco Holding SA American Depositary Shares (Each repstg 500 Preferred shares)"
    },
    {
    Symbol: "ITW",
    CompanyName: "Illinois Tool Works Inc. Common Stock"
    },
    {
    Symbol: "IVC",
    CompanyName: "Invacare Corporation Common Stock"
    },
    {
    Symbol: "IVH",
    CompanyName: "Ivy High Income Opportunities Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "IVR",
    CompanyName: "INVESCO MORTGAGE CAPITAL INC Common Stock"
    },
    {
    Symbol: "IVR$A",
    CompanyName: "Invesco Mortgage Capital Inc. Pfd Ser A"
    },
    {
    Symbol: "IVR$B",
    CompanyName: "Invesco Mortgage Capital Inc. Preferred Series B Cum Fxd to Fltg"
    },
    {
    Symbol: "IVZ",
    CompanyName: "Invesco Plc New Common Stock"
    },
    {
    Symbol: "IX",
    CompanyName: "Orix Corp Ads Common Stock"
    },
    {
    Symbol: "JAH",
    CompanyName: "Jarden Corporation Common Stock"
    },
    {
    Symbol: "JBK",
    CompanyName: "Lehman ABS 3.50 3.50% Adjustable Corp Backed Tr Certs GS Cap I"
    },
    {
    Symbol: "JBL",
    CompanyName: "Jabil Circuit, Inc. Common Stock"
    },
    {
    Symbol: "JBN",
    CompanyName: "Select Asset Inc. Select Asset Inc. on behalf of Corporate Backed Callable Trust Certificates, J.C. Penney Debenture Backed Series 2007"
    },
    {
    Symbol: "JBR",
    CompanyName: "Select Asset Inc. Corporate Backed Callable Trust Certificates, J.C. Penney Debenture"
    },
    {
    Symbol: "JBT",
    CompanyName: "John Bean Technologies Corporation Common Stock"
    },
    {
    Symbol: "JCE",
    CompanyName: "Nuveen Core Equity Alpha Fund Nuveen Core Equity Alpha Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "JCI",
    CompanyName: "Johnson Controls, Inc. Common Stock"
    },
    {
    Symbol: "JCP",
    CompanyName: "J.C. Penney Company, Inc. Holding Company Common Stock"
    },
    {
    Symbol: "JDD",
    CompanyName: "Nuveen Diversified Dividend and Income Fund Shares of Beneficial Interest"
    },
    {
    Symbol: "JE",
    CompanyName: "Just Energy Group, Inc. Ordinary Shares (Canada)"
    },
    {
    Symbol: "JEC",
    CompanyName: "Jacobs Engineering Group Inc. Common Stock"
    },
    {
    Symbol: "JEQ",
    CompanyName: "Aberdeen Japan Equity Fund, Inc. Common Stock"
    },
    {
    Symbol: "JFC",
    CompanyName: "JPMorgan China Region Fund, Inc. Common Stock"
    },
    {
    Symbol: "JFR",
    CompanyName: "Nuveen Floating Rate Income Fund Common Stock"
    },
    {
    Symbol: "JGH",
    CompanyName: "Nuveen Global High Income Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "JGV",
    CompanyName: "Nuveen Global Equity Income Fund"
    },
    {
    Symbol: "JGW",
    CompanyName: "J.G. Wentworth Company (The) Class A Common Stock"
    },
    {
    Symbol: "JHI",
    CompanyName: "John Hancock Investors Trust Common Stock"
    },
    {
    Symbol: "JHP",
    CompanyName: "Nuveen Quality Preferred Income Fund 3 Preferred Income 3"
    },
    {
    Symbol: "JHS",
    CompanyName: "John Hancock Income Securities Trust Common Stock"
    },
    {
    Symbol: "JHX",
    CompanyName: "James Hardie Industries plc American Depositary Shares (Ireland)"
    },
    {
    Symbol: "JKS",
    CompanyName: "JinkoSolar Holding Company Limited American Depositary Shares (each representing 4 Common Shares)"
    },
    {
    Symbol: "JLL",
    CompanyName: "Jones Lang LaSalle Incorporated Common Stock"
    },
    {
    Symbol: "JLS",
    CompanyName: "Nuveen Mortgage Opportunity Term Fund Nuveen Mortgage Opportunity Term Fund"
    },
    {
    Symbol: "JMEI",
    CompanyName: "Jumei International Holding Limited American Depositary Shares, each representing one Class A ordinary share"
    },
    {
    Symbol: "JMF",
    CompanyName: "Nuveen Energy MLP Total Return Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "JMI",
    CompanyName: "Javelin Mortgage Investment Corp. Common Stock"
    },
    {
    Symbol: "JMLP",
    CompanyName: "Nuveen All Cap Energy MLP Opportunities Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "JMM",
    CompanyName: "Nuveen Multi"
    },
    {
    Symbol: "JMP",
    CompanyName: "JMP Group LLC Common Shares"
    },
    {
    Symbol: "JMPB",
    CompanyName: "JMP Group Inc 8.00% Senior Notes due 2023"
    },
    {
    Symbol: "JMPC",
    CompanyName: "JMP Group Inc 7.25% Senior Notes due 2021"
    },
    {
    Symbol: "JMT",
    CompanyName: "Nuveen Mortgage Opportunity Term Fund 2 Common Shares of Beneficial Interest"
    },
    {
    Symbol: "JNJ",
    CompanyName: "Johnson & Johnson Common Stock"
    },
    {
    Symbol: "JNPR",
    CompanyName: "Juniper Networks, Inc. Common Stock"
    },
    {
    Symbol: "JNS",
    CompanyName: "Janus Capital Group, Inc. Cmn Stk"
    },
    {
    Symbol: "JOE",
    CompanyName: "St. Joe Company (The) Common Stock"
    },
    {
    Symbol: "JOF",
    CompanyName: "Japan Smaller Capitalization Fund Inc Common Stock"
    },
    {
    Symbol: "JONE",
    CompanyName: "Jones Energy, Inc. Class A Common Stock"
    },
    {
    Symbol: "JOY",
    CompanyName: "Joy Global Inc. Common Stock"
    },
    {
    Symbol: "JPC",
    CompanyName: "Nuveen Preferred Income Opportunities Fund"
    },
    {
    Symbol: "JPEP",
    CompanyName: "JP Energy Partners LP Common units representing limited partner interests"
    },
    {
    Symbol: "JPI",
    CompanyName: "Nuveen Preferred and Income Term Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "JPM",
    CompanyName: "JP Morgan Chase & Co. Common Stock"
    },
    {
    Symbol: "JPM$A",
    CompanyName: "J P Morgan Chase & Co Depositary Shs Repstg 1/400 Pfd Ser P"
    },
    {
    Symbol: "JPM$B",
    CompanyName: "JP Morgan Chase & Co Depositary Shares Representing 1/400th Preferred Series T"
    },
    {
    Symbol: "JPM$C",
    CompanyName: "JPMorgan Chase Capital XXIX 6.70% Capital Securities, Series CC"
    },
    {
    Symbol: "JPM$D",
    CompanyName: "JPMorgan Chase Bank N A London Branch Depositary Shs Repstg 1/400th Pfd Ser O"
    },
    {
    Symbol: "JPM$E",
    CompanyName: "J P Morgan Chase & Co Depository Shares Representing 1/400th Int Perp Pfd Ser W"
    },
    {
    Symbol: "JPM.W",
    CompanyName: "J P Morgan Chase & Co Warrant expiring October 28, 2018"
    },
    {
    Symbol: "JPS",
    CompanyName: "Nuveen Quality Preferred Income Fund 2 Shares of Beneficial Interest"
    },
    {
    Symbol: "JPW",
    CompanyName: "Nuveen Flexible Investment Income Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "JQC",
    CompanyName: "Nuveen Credit Strategies Income Fund Shares of Beneficial Interest"
    },
    {
    Symbol: "JRI",
    CompanyName: "Nuveen Real Asset Income and Growth Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "JRN",
    CompanyName: "Journal Communications, Inc. Class A Common Stock"
    },
    {
    Symbol: "JRO",
    CompanyName: "Nuveen Floating Rate Income Opportuntiy Fund Shares of Beneficial Interest"
    },
    {
    Symbol: "JSD",
    CompanyName: "Nuveen Short Duration Credit Opportunities Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "JTA",
    CompanyName: "Nuveen Tax"
    },
    {
    Symbol: "JTD",
    CompanyName: "Nuveen Tax"
    },
    {
    Symbol: "JTP",
    CompanyName: "Nuveen Quality Preferred Income Fund Shares of Beneficial Interest"
    },
    {
    Symbol: "JW.A",
    CompanyName: "John Wiley & Sons, Inc. Common Stock"
    },
    {
    Symbol: "JW.B",
    CompanyName: "John Wiley & Sons, Inc. Common Stock"
    },
    {
    Symbol: "JWN",
    CompanyName: "Nordstrom, Inc. Common Stock"
    },
    {
    Symbol: "K",
    CompanyName: "Kellogg Company Common Stock"
    },
    {
    Symbol: "KAI",
    CompanyName: "Kadant Inc Common Stock"
    },
    {
    Symbol: "KAMN",
    CompanyName: "Kaman Corporation Common Stock"
    },
    {
    Symbol: "KAP",
    CompanyName: "KCAP Financial, Inc. 7.375% Senior Notes due 2019"
    },
    {
    Symbol: "KAR",
    CompanyName: "KAR Auction Services, Inc Common Stock"
    },
    {
    Symbol: "KATE",
    CompanyName: "Kate Spade & Company Common Stock"
    },
    {
    Symbol: "KB",
    CompanyName: "KB Financial Group Inc"
    },
    {
    Symbol: "KBH",
    CompanyName: "KB Home Common Stock"
    },
    {
    Symbol: "KBR",
    CompanyName: "KBR, Inc. Common Stock"
    },
    {
    Symbol: "KCC",
    CompanyName: "Structured Products Corp. 8.20% Corporate Backed Trust Securities (CorTS)Issued by Provident Financial Trust I"
    },
    {
    Symbol: "KCG",
    CompanyName: "KCG Holdings, Inc. Class A Common Stock"
    },
    {
    Symbol: "KED",
    CompanyName: "Kayne Anderson Energy Development Company Common Stock"
    },
    {
    Symbol: "KEF",
    CompanyName: "Korea Equity Fund, Inc. Common Stock"
    },
    {
    Symbol: "KEG",
    CompanyName: "Key Energy Services, Inc. Common Stock"
    },
    {
    Symbol: "KEM",
    CompanyName: "Kemet Corporation New Common Stock"
    },
    {
    Symbol: "KEN.V",
    CompanyName: "Kenon Holdings Ltd. Ordinary Shares When Issued"
    },
    {
    Symbol: "KEP",
    CompanyName: "Korea Electric Power Corporation Common Stock"
    },
    {
    Symbol: "KEX",
    CompanyName: "Kirby Corporation Common Stock"
    },
    {
    Symbol: "KEY",
    CompanyName: "KeyCorp Common Stock"
    },
    {
    Symbol: "KEY$G",
    CompanyName: "KeyCorp Non Cumulative Perp Conv Pfd Ser A"
    },
    {
    Symbol: "KEYS",
    CompanyName: "Keysight Technologies Inc. Common Stock"
    },
    {
    Symbol: "KF",
    CompanyName: "Korea Fund, Inc. (The) New Common Stock"
    },
    {
    Symbol: "KFH",
    CompanyName: "KKR Financial Holdings LLC 8.375% Senior Notes due 2041"
    },
    {
    Symbol: "KFI",
    CompanyName: "KKR Financial Holdings LLC 7.50% Senior Notes due 2042"
    },
    {
    Symbol: "KFN$",
    CompanyName: "KKR Financial Holdings LLC Pfd Ser A Llc"
    },
    {
    Symbol: "KFS",
    CompanyName: "Kingsway Financial Services, Inc. Ordinary Shares"
    },
    {
    Symbol: "KFY",
    CompanyName: "Korn/Ferry International Common Stock"
    },
    {
    Symbol: "KGC",
    CompanyName: "Kinross Gold Corporation Common Stock"
    },
    {
    Symbol: "KHI",
    CompanyName: "Deutsche High Income Trust Shares of Beneficial Interest"
    },
    {
    Symbol: "KIM",
    CompanyName: "Kimco Realty Corporation Common Stock"
    },
    {
    Symbol: "KIM$H",
    CompanyName: "Kimco Realty Corporation Depositary Shares Representing 1/100 Shares of Redeemable Preferred Class H"
    },
    {
    Symbol: "KIM$I",
    CompanyName: "Kimco Realty Corporation DEPOSITARY SH REPSTG 1/1000TH PFD SER I"
    },
    {
    Symbol: "KIM$J",
    CompanyName: "Kimco Realty Corporation Depositary Sh Repstg 1/1000th Pfd CL J %"
    },
    {
    Symbol: "KIM$K",
    CompanyName: "Kimco Realty Corporation Depositary Shares Representing 1/1000th Preferred Series K"
    },
    {
    Symbol: "KING",
    CompanyName: "King Digital Entertainment plc Ordinary Share"
    },
    {
    Symbol: "KIO",
    CompanyName: "KKR Income Opportunities Fund Common Shares"
    },
    {
    Symbol: "KKD",
    CompanyName: "Krispy Kreme Doughnuts, Inc. Common Stock"
    },
    {
    Symbol: "KKR",
    CompanyName: "KKR & Co. L.P. Common Units Representing Limited Partnership Interest"
    },
    {
    Symbol: "KMB",
    CompanyName: "Kimberly"
    },
    {
    Symbol: "KMF",
    CompanyName: "Kayne Anderson Midstream Energy Fund, Inc Common Stock"
    },
    {
    Symbol: "KMG",
    CompanyName: "KMG Chemicals, Inc. Common Stock"
    },
    {
    Symbol: "KMI",
    CompanyName: "Kinder Morgan, Inc. Common Stock"
    },
    {
    Symbol: "KMI.W",
    CompanyName: "Kinder Morgan, Inc. Warrants Expiring 2017"
    },
    {
    Symbol: "KMM",
    CompanyName: "Deutsche Multi"
    },
    {
    Symbol: "KMPA",
    CompanyName: "Kemper Corporation 7.375% Subordinated Debentures due 2054"
    },
    {
    Symbol: "KMPR",
    CompanyName: "Kemper Corporation"
    },
    {
    Symbol: "KMT",
    CompanyName: "Kennametal Inc. Common Stock"
    },
    {
    Symbol: "KMX",
    CompanyName: "CarMax Inc"
    },
    {
    Symbol: "KN",
    CompanyName: "Knowles Corporation Common Stock"
    },
    {
    Symbol: "KND",
    CompanyName: "Kindred Healthcare, Inc. Common Stock"
    },
    {
    Symbol: "KNL",
    CompanyName: "Knoll, Inc. Common Stock"
    },
    {
    Symbol: "KNM",
    CompanyName: "Konami Corporation American Depositary Shares (Each repstg one share of Common Stock)"
    },
    {
    Symbol: "KNOP",
    CompanyName: "KNOT Offshore Partners LP Common Units representing Limited Partner Interests"
    },
    {
    Symbol: "KNX",
    CompanyName: "Knight Transportation, Inc. Common Stock"
    },
    {
    Symbol: "KO",
    CompanyName: "Coca"
    },
    {
    Symbol: "KODK",
    CompanyName: "Eastman Kodak Company Common New"
    },
    {
    Symbol: "KODK.A",
    CompanyName: "Eastman Kodak Company Wt Exp 135%"
    },
    {
    Symbol: "KODK.W",
    CompanyName: "Eastman Kodak Company Warrant (Expiring September 3, 2018)"
    },
    {
    Symbol: "KOF",
    CompanyName: "Coca Cola Femsa S.A.B. de C.V. Common Stock"
    },
    {
    Symbol: "KOP",
    CompanyName: "Koppers Holdings Inc. Koppers Holdings Inc. Common Stock"
    },
    {
    Symbol: "KORS",
    CompanyName: "Michael Kors Holdings Limited Ordinary Shares"
    },
    {
    Symbol: "KOS",
    CompanyName: "Kosmos Energy Ltd. Common Shares"
    },
    {
    Symbol: "KR",
    CompanyName: "Kroger Company (The) Common Stock"
    },
    {
    Symbol: "KRA",
    CompanyName: "Kraton Performance Polymers, Inc Common Stock"
    },
    {
    Symbol: "KRC",
    CompanyName: "Kilroy Realty Corporation Common Stock"
    },
    {
    Symbol: "KRC$G",
    CompanyName: "Kilroy Realty Corporation Preferred Stock Series G"
    },
    {
    Symbol: "KRC$H",
    CompanyName: "Kilroy Realty Corporation Pfd Ser H"
    },
    {
    Symbol: "KRG",
    CompanyName: "Kite Realty Group Trust Common Stock"
    },
    {
    Symbol: "KRG$A",
    CompanyName: "Kite Realty Group Trust PERP PFD SER A"
    },
    {
    Symbol: "KRO",
    CompanyName: "Kronos Worldwide Inc Common Stock"
    },
    {
    Symbol: "KS",
    CompanyName: "KapStone Paper and Packaging Corporation Common Stock"
    },
    {
    Symbol: "KSM",
    CompanyName: "Deutsche Strategic Municiple Income Trust Common Shares of Beneficial Interest"
    },
    {
    Symbol: "KSS",
    CompanyName: "Kohl's Corporation Common Stock"
    },
    {
    Symbol: "KST",
    CompanyName: "Deutsche Strategic Income Trust Shares of Beneficial Interest"
    },
    {
    Symbol: "KSU",
    CompanyName: "Kansas City Southern Common Stock"
    },
    {
    Symbol: "KSU$",
    CompanyName: "Kansas City Southern Preferred Stock"
    },
    {
    Symbol: "KT",
    CompanyName: "KT Corporation Common Stock"
    },
    {
    Symbol: "KTF",
    CompanyName: "Deutsche Municiple Income Trust Common Shares"
    },
    {
    Symbol: "KTH",
    CompanyName: "Structures Products Cp 8% CorTS Issued by Peco Energy Cap Tr II Preferred Stock"
    },
    {
    Symbol: "KTN",
    CompanyName: "Structured Products Corp 8.205% CorTS 8.205% Corporate Backed Trust Securities (CorTS)"
    },
    {
    Symbol: "KTP",
    CompanyName: "Corts 7.625 Pfd Common Stock"
    },
    {
    Symbol: "KW",
    CompanyName: "Kennedy"
    },
    {
    Symbol: "KWN",
    CompanyName: "Kennedy"
    },
    {
    Symbol: "KWR",
    CompanyName: "Quaker Chemical Corporation Common Stock"
    },
    {
    Symbol: "KYE",
    CompanyName: "Kayne Anderson Total Energy Return Fund, Inc. Common Stock"
    },
    {
    Symbol: "KYN",
    CompanyName: "Kayne Anderson MLP Investment Company Common Stock"
    },
    {
    Symbol: "KYN$E",
    CompanyName: "Kayne Anderson MLP Investment Company Series E Mandatory Redeemable Preferred Shares, $25.00 liquidation preference"
    },
    {
    Symbol: "KYN$F",
    CompanyName: "Kayne Anderson MLP Investment Company 3.50% Series F Mandatory Redeemable Preferred Shares $25.00 Liquidation Preference per share"
    },
    {
    Symbol: "KYN$G",
    CompanyName: "Kayne Anderson MLP Investment Company Series G Mandatory Redeemable Preferred Shares Liquidation Preference"
    },
    {
    Symbol: "KYO",
    CompanyName: "Kyocera Corporation Common Stock"
    },
    {
    Symbol: "L",
    CompanyName: "Loews Corporation Common Stock"
    },
    {
    Symbol: "LAD",
    CompanyName: "Lithia Motors, Inc. Common Stock"
    },
    {
    Symbol: "LADR",
    CompanyName: "Ladder Capital Corp Class A Common Stock"
    },
    {
    Symbol: "LAS",
    CompanyName: "Lentuo International Inc. American Depositary Shares, each representing two ordinary shares"
    },
    {
    Symbol: "LAZ",
    CompanyName: "Lazard LTD. Lazard, LTD. Class A Common Stock"
    },
    {
    Symbol: "LB",
    CompanyName: "L Brands, Inc."
    },
    {
    Symbol: "LBF",
    CompanyName: "Deutsche Global High Income Fund, Inc. Common Stock"
    },
    {
    Symbol: "LC",
    CompanyName: "LendingClub Corporation Common Stock"
    },
    {
    Symbol: "LCI",
    CompanyName: "Lannett Co Inc Common Stock"
    },
    {
    Symbol: "LCM",
    CompanyName: "Advent/Claymore Enhanced Growth & Income Fund Advent/Claymore Enhanced Growth & Income Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "LDF",
    CompanyName: "Latin American Discovery Fund, Inc. (The) Common Stock"
    },
    {
    Symbol: "LDL",
    CompanyName: "Lydall, Inc. Common Stock"
    },
    {
    Symbol: "LDOS",
    CompanyName: "Leidos Holdings, Inc. Common Stock"
    },
    {
    Symbol: "LDP",
    CompanyName: "Cohen & Steers Limited Duration Preferred and Income Fund, Inc."
    },
    {
    Symbol: "LDR",
    CompanyName: "Landauer, Inc. Common Stock"
    },
    {
    Symbol: "LEA",
    CompanyName: "Lear Corporation Common Stock"
    },
    {
    Symbol: "LEAF",
    CompanyName: "Springleaf Holdings, Inc. Common Stock"
    },
    {
    Symbol: "LEE",
    CompanyName: "Lee Enterprises, Incorporated Common Stock"
    },
    {
    Symbol: "LEG",
    CompanyName: "Leggett & Platt, Incorporated Common Stock"
    },
    {
    Symbol: "LEJU",
    CompanyName: "Leju Holdings Limited American Depositary Shares, each representing one Ordinary share"
    },
    {
    Symbol: "LEN",
    CompanyName: "Lennar Corporation Class A Common Stock"
    },
    {
    Symbol: "LEN.B",
    CompanyName: "Lennar Corporation Class B"
    },
    {
    Symbol: "LEO",
    CompanyName: "Dreyfus Strategic Municipals, Inc. Common Stock"
    },
    {
    Symbol: "LEU",
    CompanyName: "Centrus Energy Corp. Class A Common Stock"
    },
    {
    Symbol: "LF",
    CompanyName: "Leapfrog Enterprises Inc Common Stock"
    },
    {
    Symbol: "LFC",
    CompanyName: "China Life Insurance Company Limited American Depositary Shares"
    },
    {
    Symbol: "LFL",
    CompanyName: "LATAM Airlines Group S.A."
    },
    {
    Symbol: "LG",
    CompanyName: "Laclede Gas Company Common Stock"
    },
    {
    Symbol: "LGF",
    CompanyName: "Lions Gate Entertainment Corporation Common Stock"
    },
    {
    Symbol: "LGI",
    CompanyName: "Lazard Global Total Return and Income Fund Common Stock"
    },
    {
    Symbol: "LH",
    CompanyName: "Laboratory Corporation of America Holdings Common Stock"
    },
    {
    Symbol: "LHO",
    CompanyName: "LaSalle Hotel Properties Common Stock"
    },
    {
    Symbol: "LHO$H",
    CompanyName: "LaSalle Hotel Properties 7.50% Series H Cumulative Redeemable Preferred Shares of Beneficial Interest"
    },
    {
    Symbol: "LHO$I",
    CompanyName: "LaSalle Hotel Properties 6.375% Series I Cumulative Redeemable Redeemable Preferred SBI"
    },
    {
    Symbol: "LII",
    CompanyName: "Lennox International, Inc. Common Stock"
    },
    {
    Symbol: "LITB",
    CompanyName: "LightInTheBox Holding Co., Ltd. American Depositary Shares, each representing 2 ordinary shares"
    },
    {
    Symbol: "LL",
    CompanyName: "Lumber Liquidators Holdings, Inc Common Stock"
    },
    {
    Symbol: "LLL",
    CompanyName: "L"
    },
    {
    Symbol: "LLY",
    CompanyName: "Eli Lilly and Company Common Stock"
    },
    {
    Symbol: "LM",
    CompanyName: "Legg Mason, Inc. Common Stock"
    },
    {
    Symbol: "LMT",
    CompanyName: "Lockheed Martin Corporation Common Stock"
    },
    {
    Symbol: "LNC",
    CompanyName: "Lincoln National Corporation Common Stock"
    },
    {
    Symbol: "LNC.W",
    CompanyName: "Lincoln National Corporation Warrant expiring July 10, 2019"
    },
    {
    Symbol: "LND",
    CompanyName: "Brasilagro Brazilian Agric Real Estate Co Sponsored ADR (Brazil)"
    },
    {
    Symbol: "LNKD",
    CompanyName: "LinkedIn Corporation Class A Common Stock"
    },
    {
    Symbol: "LNN",
    CompanyName: "Lindsay Corporation Common Stock"
    },
    {
    Symbol: "LNT",
    CompanyName: "Alliant Energy Corporation Common Stock"
    },
    {
    Symbol: "LO",
    CompanyName: "Lorillard, Inc Common Stock"
    },
    {
    Symbol: "LOCK",
    CompanyName: "LifeLock, Inc. Common Stock"
    },
    {
    Symbol: "LOR",
    CompanyName: "Lazard World Dividend & Income Fund, Inc. Common Stock"
    },
    {
    Symbol: "LOW",
    CompanyName: "Lowe's Companies, Inc. Common Stock"
    },
    {
    Symbol: "LPG",
    CompanyName: "Dorian LPG Ltd. Common Stock"
    },
    {
    Symbol: "LPI",
    CompanyName: "Laredo Petroleum, Inc. Common Stock"
    },
    {
    Symbol: "LPL",
    CompanyName: "LG Display Co, Ltd AMERICAN DEPOSITORY SHARES"
    },
    {
    Symbol: "LPT",
    CompanyName: "Liberty Property Trust"
    },
    {
    Symbol: "LPX",
    CompanyName: "Louisiana"
    },
    {
    Symbol: "LQ",
    CompanyName: "La Quinta Holdings Inc. Common Stock"
    },
    {
    Symbol: "LRE",
    CompanyName: "LRR Energy, L.P. Common Units Representing Limited Partner Interests"
    },
    {
    Symbol: "LRN",
    CompanyName: "K12 Inc Common Stock"
    },
    {
    Symbol: "LTC",
    CompanyName: "LTC Properties, Inc. Common Stock"
    },
    {
    Symbol: "LTM",
    CompanyName: "Life Time Fitness Common Stock"
    },
    {
    Symbol: "LUB",
    CompanyName: "Luby's, Inc. Common Stock"
    },
    {
    Symbol: "LUK",
    CompanyName: "Leucadia National Corporation Common Stock"
    },
    {
    Symbol: "LUV",
    CompanyName: "Southwest Airlines Company Common Stock"
    },
    {
    Symbol: "LUX",
    CompanyName: "Luxottica Group, S.p.A. Common Stock"
    },
    {
    Symbol: "LVLT",
    CompanyName: "Level 3 Communications, Inc. Common Stock"
    },
    {
    Symbol: "LVS",
    CompanyName: "Las Vegas Sands Corp. Common Stock"
    },
    {
    Symbol: "LXFR",
    CompanyName: "Luxfer Holdings PLC American Depositary Shares (each representing one"
    },
    {
    Symbol: "LXFT",
    CompanyName: "Luxoft Holding, Inc. Class A Ordinary Shares"
    },
    {
    Symbol: "LXK",
    CompanyName: "Lexmark International, Inc. Common Stock"
    },
    {
    Symbol: "LXP",
    CompanyName: "Lexington Realty Trust Common Stock"
    },
    {
    Symbol: "LXP$C",
    CompanyName: "Lexington Realty Trust Preferred Conv. Series C"
    },
    {
    Symbol: "LXU",
    CompanyName: "LSB Industries, Inc. Common Stock"
    },
    {
    Symbol: "LYB",
    CompanyName: "LyondellBasell Industries NV Ordinary Shares Class A (Netherlands)"
    },
    {
    Symbol: "LYG",
    CompanyName: "Lloyds Banking Group Plc American Depositary Shares"
    },
    {
    Symbol: "LYG$A",
    CompanyName: "Lloyds Banking Group Plc 7.75% Public Income NotES (PINES) due July 15, 2050"
    },
    {
    Symbol: "LYV",
    CompanyName: "Live Nation Entertainment, Inc. Common Stock"
    },
    {
    Symbol: "LZB",
    CompanyName: "La"
    },
    {
    Symbol: "M",
    CompanyName: "Macy's Inc Common Stock"
    },
    {
    Symbol: "MA",
    CompanyName: "Mastercard Incorporated Common Stock"
    },
    {
    Symbol: "MAA",
    CompanyName: "Mid"
    },
    {
    Symbol: "MAC",
    CompanyName: "Macerich Company (The) Common Stock"
    },
    {
    Symbol: "MAIN",
    CompanyName: "Main Street Capital Corporation Common Stock"
    },
    {
    Symbol: "MAN",
    CompanyName: "ManpowerGroup Common Stock"
    },
    {
    Symbol: "MANU",
    CompanyName: "Manchester United Ltd. Class A Ordinary Shares"
    },
    {
    Symbol: "MAS",
    CompanyName: "Masco Corporation Common Stock"
    },
    {
    Symbol: "MATX",
    CompanyName: "Matson, Inc. Common Stock"
    },
    {
    Symbol: "MAV",
    CompanyName: "Pioneer Municipal High Income Advantage Trust Common Shares of Beneficial Interest"
    },
    {
    Symbol: "MBI",
    CompanyName: "MBIA Inc. Common Stock"
    },
    {
    Symbol: "MBLY",
    CompanyName: "Mobileye N.V. Ordinary Shares"
    },
    {
    Symbol: "MBT",
    CompanyName: "Mobile TeleSystems OJSC"
    },
    {
    Symbol: "MC",
    CompanyName: "Moelis & Company Class A Common Stock"
    },
    {
    Symbol: "MCA",
    CompanyName: "Blackrock MuniYield California Quality Fund, Inc. Common Stock"
    },
    {
    Symbol: "MCC",
    CompanyName: "Medley Capital Corporation Common Stock"
    },
    {
    Symbol: "MCD",
    CompanyName: "McDonald's Corporation Common Stock"
    },
    {
    Symbol: "MCI",
    CompanyName: "Babson Capital Corporate Investors Common Stock"
    },
    {
    Symbol: "MCK",
    CompanyName: "McKesson Corporation Common Stock"
    },
    {
    Symbol: "MCN",
    CompanyName: "Madison Covered Call & Equity Strategy Fund Common Stock"
    },
    {
    Symbol: "MCO",
    CompanyName: "Moody's Corporation Common Stock"
    },
    {
    Symbol: "MCP",
    CompanyName: "Molycorp, Inc Common Stock"
    },
    {
    Symbol: "MCQ",
    CompanyName: "Medley Capital Corporation 7.125% Senior Notes due 2019"
    },
    {
    Symbol: "MCR",
    CompanyName: "MFS Charter Income Trust Common Stock"
    },
    {
    Symbol: "MCS",
    CompanyName: "Marcus Corporation (The) Common Stock"
    },
    {
    Symbol: "MCV",
    CompanyName: "Medley Capital Corporation 6.125% Senior Notes due 2023"
    },
    {
    Symbol: "MCY",
    CompanyName: "Mercury General Corporation Common Stock"
    },
    {
    Symbol: "MD",
    CompanyName: "Mednax, Inc. Common Stock"
    },
    {
    Symbol: "MDC",
    CompanyName: "M.D.C. Holdings, Inc. Common Stock"
    },
    {
    Symbol: "MDLY",
    CompanyName: "Medley Management Inc. Class A Common Stock"
    },
    {
    Symbol: "MDP",
    CompanyName: "Meredith Corporation Common Stock"
    },
    {
    Symbol: "MDR",
    CompanyName: "McDermott International, Inc. Common Stock"
    },
    {
    Symbol: "MDT",
    CompanyName: "Medtronic Inc. Common Stock"
    },
    {
    Symbol: "MDU",
    CompanyName: "MDU Resources Group, Inc. Common Stock"
    },
    {
    Symbol: "MED",
    CompanyName: "MEDIFAST INC Common Stock"
    },
    {
    Symbol: "MEG",
    CompanyName: "Media General, Inc. Common Stock"
    },
    {
    Symbol: "MEI",
    CompanyName: "Methode Electronics, Inc. Common Stock"
    },
    {
    Symbol: "MEN",
    CompanyName: "Blackrock MuniEnhanced Fund, Inc Common Stock"
    },
    {
    Symbol: "MEP",
    CompanyName: "Midcoast Energy Partners, L.P. Common units representing limited partner interests"
    },
    {
    Symbol: "MER$D",
    CompanyName: "Merrill Lynch & Co., Inc. Preferred Stock"
    },
    {
    Symbol: "MER$E",
    CompanyName: "Merrill Lynch & Co., Inc. Preferred Stock"
    },
    {
    Symbol: "MER$F",
    CompanyName: "Merrill Lynch & Co., Inc. Preferred Stock"
    },
    {
    Symbol: "MER$K",
    CompanyName: "Merrill Lynch & Co., Inc. 6.45% Trust Preferred Securities"
    },
    {
    Symbol: "MER$M",
    CompanyName: "Merrill Lynch & Co., Inc. 6.45% Trust Preferred Securities"
    },
    {
    Symbol: "MER$P",
    CompanyName: "Merrill Lynch & Co., Inc. Merrill Lynch Capital Trust III 7.375% Trust Preferred Securities"
    },
    {
    Symbol: "MET",
    CompanyName: "MetLife, Inc. Common Stock"
    },
    {
    Symbol: "MET$A",
    CompanyName: "MetLife, Inc. Preferred Series A Floating Rate"
    },
    {
    Symbol: "MET$B",
    CompanyName: "MetLife, Inc. Preferred Series B"
    },
    {
    Symbol: "MFA",
    CompanyName: "MFA Financial, Inc."
    },
    {
    Symbol: "MFA$B",
    CompanyName: "MFA Financial, Inc. Preferred Series B"
    },
    {
    Symbol: "MFC",
    CompanyName: "Manulife Financial Corporation Common Stock"
    },
    {
    Symbol: "MFD",
    CompanyName: "Macquarie/First Trust Global Common Stock"
    },
    {
    Symbol: "MFG",
    CompanyName: "Mizuho Financial Group, Inc. Sponosred ADR (Japan)"
    },
    {
    Symbol: "MFL",
    CompanyName: "Blackrock MuniHoldings Investment Quality Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "MFM",
    CompanyName: "MFS Municipal Income Trust Common Stock"
    },
    {
    Symbol: "MFO",
    CompanyName: "MFA Financial, Inc. 8.00% Senior Notes due 2042"
    },
    {
    Symbol: "MFT",
    CompanyName: "Blackrock MuniYield Investment Quality Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "MFV",
    CompanyName: "MFS Special Value Trust Common Stock"
    },
    {
    Symbol: "MG",
    CompanyName: "Mistras Group Inc Common Stock"
    },
    {
    Symbol: "MGA",
    CompanyName: "Magna International, Inc. Common Stock"
    },
    {
    Symbol: "MGF",
    CompanyName: "MFS Government Markets Income Trust Common Stock"
    },
    {
    Symbol: "MGM",
    CompanyName: "MGM Resorts International Common Stock"
    },
    {
    Symbol: "MGR",
    CompanyName: "Affiliated Managers Group, Inc. 6.375% Senior Notes due 2042"
    },
    {
    Symbol: "MGU",
    CompanyName: "Macquarie Global Infrastructure Total Return Fund Inc. Common Stock"
    },
    {
    Symbol: "MH$A",
    CompanyName: "Maiden Holdings, Ltd. Pref Shs Ser A (Bermuda)"
    },
    {
    Symbol: "MHD",
    CompanyName: "Blackrock MuniHoldings Fund, Inc. Common Stock"
    },
    {
    Symbol: "MHF",
    CompanyName: "Western Asset Municipal High Income Fund, Inc. Common Stock"
    },
    {
    Symbol: "MHFI",
    CompanyName: "McGraw Hill Financial, Inc. Common Stock"
    },
    {
    Symbol: "MHG",
    CompanyName: "Marine Harvest ASA Sponsored ADR (Norway)"
    },
    {
    Symbol: "MHI",
    CompanyName: "Pioneer Municipal High Income Trust Common Shares of Beneficial Interest"
    },
    {
    Symbol: "MHK",
    CompanyName: "Mohawk Industries, Inc. Common Stock"
    },
    {
    Symbol: "MHN",
    CompanyName: "Blackrock MuniHoldings New York Quality Fund, Inc. Common Stock"
    },
    {
    Symbol: "MHNA",
    CompanyName: "Maiden Holdings North America Ltd. 8.25% Notes due 2041"
    },
    {
    Symbol: "MHNB",
    CompanyName: "Maiden Holdings North America, Ltd. 8.00% Notes due 2042"
    },
    {
    Symbol: "MHNC",
    CompanyName: "Maiden Holdings North America, Ltd. 7.75% Notes due 2043"
    },
    {
    Symbol: "MHO",
    CompanyName: "M/I Homes, Inc. Common Stock"
    },
    {
    Symbol: "MHO$A",
    CompanyName: "M/I Homes, Inc. M/I Homes, Inc. Depositary Shares (Each representing 1/1000 of a Share of 9.75% Series A Preferred Share)"
    },
    {
    Symbol: "MHR",
    CompanyName: "Magnum Hunter Resources Corporation"
    },
    {
    Symbol: "MHY",
    CompanyName: "Western Asset Managed High Income Fund, Inc. Common Stock"
    },
    {
    Symbol: "MIC",
    CompanyName: "Macquarie Infrastructure Company LLC (New) Shares representing one Limited Liability Interest"
    },
    {
    Symbol: "MIE",
    CompanyName: "Cohen & Steers MLP Income and Energy Opportunity Fund, Inc. Common Stock"
    },
    {
    Symbol: "MIG",
    CompanyName: "Meadowbrook Insurance Group, Inc. Common Stock"
    },
    {
    Symbol: "MIL",
    CompanyName: "MFC Industrial Ltd."
    },
    {
    Symbol: "MILL",
    CompanyName: "Miller Energy Resourses, Inc. Common Stock"
    },
    {
    Symbol: "MILL$C",
    CompanyName: "Miller Energy Resources, Inc. 10.75% Series C Cumulative, Redeemable Preferred Stock"
    },
    {
    Symbol: "MILL$D",
    CompanyName: "Miller Energy Resources, Inc. 10.5% Series D Fixed Rate/Floating Rate Cumulative Redeemable Preferred Stock"
    },
    {
    Symbol: "MIN",
    CompanyName: "MFS Intermediate Income Trust Common Stock"
    },
    {
    Symbol: "MITT",
    CompanyName: "AG Mortgage Investment Trust, Inc. Common Stock"
    },
    {
    Symbol: "MITT$A",
    CompanyName: "AG Mortgage Investment Trust, Inc. 8.25% Preferred Series A"
    },
    {
    Symbol: "MITT$B",
    CompanyName: "AG Mortgage Investment Trust, Inc. Preferred Series B"
    },
    {
    Symbol: "MIXT",
    CompanyName: "MiX Telematics Limited American Depositary Shares, each representing 25 Ordinary Shares"
    },
    {
    Symbol: "MIY",
    CompanyName: "Blackrock MuniYield Michigan Quality Fund, Inc. Common Stock"
    },
    {
    Symbol: "MJI",
    CompanyName: "Blackrock MuniYield New Jersey Quality Fund, Inc. Common Stock"
    },
    {
    Symbol: "MJN",
    CompanyName: "Mead Johnson Nutrition Company Common Stock"
    },
    {
    Symbol: "MKC",
    CompanyName: "McCormick & Company, Incorporated Common Stock"
    },
    {
    Symbol: "MKC.V",
    CompanyName: "McCormick & Company, Incorporated Common Stock"
    },
    {
    Symbol: "MKL",
    CompanyName: "Markel Corporation Common Stock"
    },
    {
    Symbol: "MLI",
    CompanyName: "Mueller Industries, Inc. Common Stock"
    },
    {
    Symbol: "MLM",
    CompanyName: "Martin Marietta Materials, Inc. Common Stock"
    },
    {
    Symbol: "MLP",
    CompanyName: "Maui Land & Pineapple Company, Inc. Common Stock"
    },
    {
    Symbol: "MLR",
    CompanyName: "Miller Industries, Inc. Common Stock"
    },
    {
    Symbol: "MM",
    CompanyName: "Millennial Media, Inc. Common Stock"
    },
    {
    Symbol: "MMC",
    CompanyName: "Marsh & McLennan Companies, Inc. Common Stock"
    },
    {
    Symbol: "MMD",
    CompanyName: "MainStay DefinedTerm Municipal Opportunities Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "MMI",
    CompanyName: "Marcus & Millichap, Inc. Common Stock"
    },
    {
    Symbol: "MMM",
    CompanyName: "3M Company Common Stock"
    },
    {
    Symbol: "MMP",
    CompanyName: "Magellan Midstream Partners L.P. Limited Partnership"
    },
    {
    Symbol: "MMS",
    CompanyName: "Maximus, Inc. Common Stock"
    },
    {
    Symbol: "MMT",
    CompanyName: "MFS Multimarket Income Trust Common Stock"
    },
    {
    Symbol: "MMU",
    CompanyName: "Western Asset Managed Municipals Fund, Inc. Common Stock"
    },
    {
    Symbol: "MN",
    CompanyName: "Manning & Napier, Inc. Class A Common Stock"
    },
    {
    Symbol: "MNE",
    CompanyName: "Blackrock Muni New York Intermediate Duration Fund Inc Common Stock"
    },
    {
    Symbol: "MNI",
    CompanyName: "McClatchy Company (The) Common Stock"
    },
    {
    Symbol: "MNK",
    CompanyName: "Mallinckrodt plc Ordinary Shares"
    },
    {
    Symbol: "MNP",
    CompanyName: "Western Asset Municipal Partners Fund, Inc. Common Stock"
    },
    {
    Symbol: "MNR",
    CompanyName: "Monmouth Real Estate Investment Corporation Class A Common Stock"
    },
    {
    Symbol: "MNR$A",
    CompanyName: "Monmouth Real Estate Investment Corporation 7.625% Series A Cumulative Redeemable Preferred Stock"
    },
    {
    Symbol: "MNR$B",
    CompanyName: "Monmouth Real Estate Investment Corporation Series B Cumulative Redeemable Preferred Stock $0.01 par value"
    },
    {
    Symbol: "MO",
    CompanyName: "Altria Group, Inc."
    },
    {
    Symbol: "MOD",
    CompanyName: "Modine Manufacturing Company Common Stock"
    },
    {
    Symbol: "MODN",
    CompanyName: "Model N, Inc. Common Stock"
    },
    {
    Symbol: "MOG.A",
    CompanyName: "Moog Inc. Class A Common Stock"
    },
    {
    Symbol: "MOG.B",
    CompanyName: "Moog Inc. Class B Common Stock"
    },
    {
    Symbol: "MOH",
    CompanyName: "Molina Healthcare Inc Common Stock"
    },
    {
    Symbol: "MON",
    CompanyName: "Monsanto Company Common Stock"
    },
    {
    Symbol: "MORE",
    CompanyName: "Monogram Residential Trust, Inc. Common"
    },
    {
    Symbol: "MOS",
    CompanyName: "Mosaic Company (The) Common Stock"
    },
    {
    Symbol: "MOV",
    CompanyName: "Movado Group Inc. Common Stock"
    },
    {
    Symbol: "MP$D",
    CompanyName: "Mississippi Power Company 5.25 Srs Pfd"
    },
    {
    Symbol: "MPA",
    CompanyName: "Blackrock MuniYield Pennsylvania Quality Fund Common Stock"
    },
    {
    Symbol: "MPC",
    CompanyName: "Marathon Petroleum Corporation Common Stock"
    },
    {
    Symbol: "MPG",
    CompanyName: "Metaldyne Performance Group Inc. Common Stock"
    },
    {
    Symbol: "MPLX",
    CompanyName: "MPLX LP Common Units Representing Limited Partner Interests"
    },
    {
    Symbol: "MPO",
    CompanyName: "Midstates Petroleum Company, Inc. Common Stock"
    },
    {
    Symbol: "MPV",
    CompanyName: "Babson Capital Participation Investors Common Stock"
    },
    {
    Symbol: "MPW",
    CompanyName: "Medical Properties Trust, Inc. common stock"
    },
    {
    Symbol: "MPX",
    CompanyName: "Marine Products Corporation Common Stock"
    },
    {
    Symbol: "MQT",
    CompanyName: "Blackrock MuniYield Quality Fund II, Inc. Common Stock"
    },
    {
    Symbol: "MQY",
    CompanyName: "Blackrock MuniYield Quality Fund, Inc. Common Stock"
    },
    {
    Symbol: "MR",
    CompanyName: "Mindray Medical International Limited Sponsored ADR representing Class A shares (China)"
    },
    {
    Symbol: "MRC",
    CompanyName: "MRC Global Inc. Common Stock"
    },
    {
    Symbol: "MRH",
    CompanyName: "Montpelier Re Holdings Ltd."
    },
    {
    Symbol: "MRH$A",
    CompanyName: "Montpelier RE Holdings Ltd Non Cumulative Series A Preferred Shares (Bermuda)"
    },
    {
    Symbol: "MRIN",
    CompanyName: "Marin Software Incorporated Common Stock"
    },
    {
    Symbol: "MRK",
    CompanyName: "Merck & Company, Inc. Common Stock (new)"
    },
    {
    Symbol: "MRO",
    CompanyName: "Marathon Oil Corporation Common Stock"
    },
    {
    Symbol: "MS",
    CompanyName: "Morgan Stanley Common Stock"
    },
    {
    Symbol: "MS$A",
    CompanyName: "Morgan Stanley Dep Shs repstg 1/1000 Pfd Ser A"
    },
    {
    Symbol: "MS$E",
    CompanyName: "Morgan Stanley DEPOSITARY SHARES REP 1/1000TH SHARES FIXED/FLTG PREFERRED STOCK SERIES E"
    },
    {
    Symbol: "MS$F",
    CompanyName: "Morgan Stanley Dep Shs Rpstg 1/1000th Int Prd Ser F Fxd to Flag"
    },
    {
    Symbol: "MS$G",
    CompanyName: "Morgan Stanley Depositary Shares Representing 1/1000th Preferred Series G"
    },
    {
    Symbol: "MS$I",
    CompanyName: "Morgan Stanley Depository Shares Representing 1/1000th Preferred Series 1 Fixed to Floating Non (Cum)"
    },
    {
    Symbol: "MSA",
    CompanyName: "MSA Safety Incorporated Common Stock"
    },
    {
    Symbol: "MSB",
    CompanyName: "Mesabi Trust Common Stock"
    },
    {
    Symbol: "MSCA",
    CompanyName: "Main Street Capital Corporation 6.125% Senior Notes due 2023"
    },
    {
    Symbol: "MSCI",
    CompanyName: "MSCI Inc Common Stock"
    },
    {
    Symbol: "MSD",
    CompanyName: "Morgan Stanley Emerging Markets Debt Fund, Inc. Common Stock"
    },
    {
    Symbol: "MSF",
    CompanyName: "Morgan Stanley Emerging Markets Fund, Inc. Common Stock"
    },
    {
    Symbol: "MSI",
    CompanyName: "Motorola Solutions, Inc. Common Stock"
    },
    {
    Symbol: "MSJ",
    CompanyName: "Morgan Stanley Cap Trust VI Cap Securities"
    },
    {
    Symbol: "MSK",
    CompanyName: "Morgan Stanley Cap TR VIII GDT Cap Securities"
    },
    {
    Symbol: "MSL",
    CompanyName: "MidSouth Bancorp Common Stock"
    },
    {
    Symbol: "MSM",
    CompanyName: "MSC Industrial Direct Company, Inc. Common Stock"
    },
    {
    Symbol: "MSO",
    CompanyName: "Martha Stewart Living Omnimedia, Inc. Common Stock"
    },
    {
    Symbol: "MSP",
    CompanyName: "Madison Strategic Sector Premium Fund Madison Strategic Sector Premium Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "MSZ",
    CompanyName: "Morgan Stanley Capital Trust VII Cap Secs"
    },
    {
    Symbol: "MT",
    CompanyName: "Arcelor Mittal NY Registry Shares NEW"
    },
    {
    Symbol: "MTB",
    CompanyName: "M&T Bank Corporation Common Stock"
    },
    {
    Symbol: "MTB$",
    CompanyName: "M&T Bank Corporation Fixed Rate Cumulative Perpetual Preferred Stock, Series A"
    },
    {
    Symbol: "MTB$C",
    CompanyName: "M&T Bank Corporation Fixed Rate Cumulative Perpetual Preferred Stock, Series C"
    },
    {
    Symbol: "MTB.W",
    CompanyName: "M&T Bank Corporation Warrant (Expiring December 23, 2018)"
    },
    {
    Symbol: "MTCN",
    CompanyName: "ArcelorMittal 6.00% Mandatorily Convertible Subordinated Notes due 2016"
    },
    {
    Symbol: "MTD",
    CompanyName: "Mettler"
    },
    {
    Symbol: "MTDR",
    CompanyName: "Matador Resources Company Common Stock"
    },
    {
    Symbol: "MTG",
    CompanyName: "MGIC Investment Corporation Common Stock"
    },
    {
    Symbol: "MTH",
    CompanyName: "Meritage Homes Corporation Common Stock"
    },
    {
    Symbol: "MTL",
    CompanyName: "Mechel OAO American Depositary Shares (Each rep. 1 common shares)"
    },
    {
    Symbol: "MTL$",
    CompanyName: "Mechel Steel Group OAO American Depositary Shares (each representing one"
    },
    {
    Symbol: "MTN",
    CompanyName: "Vail Resorts, Inc. Common Stock"
    },
    {
    Symbol: "MTOR",
    CompanyName: "Meritor, Inc. Common Stock"
    },
    {
    Symbol: "MTR",
    CompanyName: "Mesa Royalty Trust Common Stock"
    },
    {
    Symbol: "MTRN",
    CompanyName: "Materion Corporation"
    },
    {
    Symbol: "MTS",
    CompanyName: "Montgomery Street Income Securities, Inc. Common Stock"
    },
    {
    Symbol: "MTT",
    CompanyName: "Western Asset Municipal Defined Opportunity Trust Inc Common Stock"
    },
    {
    Symbol: "MTU",
    CompanyName: "Mitsubishi UFJ Financial Group, Inc. Common Stock"
    },
    {
    Symbol: "MTW",
    CompanyName: "Manitowoc Company, Inc. (The) Common Stock"
    },
    {
    Symbol: "MTX",
    CompanyName: "Minerals Technologies Inc. Common Stock"
    },
    {
    Symbol: "MTZ",
    CompanyName: "MasTec, Inc. Common Stock"
    },
    {
    Symbol: "MUA",
    CompanyName: "Blackrock MuniAssets Fund, Inc Common Stock"
    },
    {
    Symbol: "MUC",
    CompanyName: "Blackrock MuniHoldings California Quality Fund, Inc. Common Stock"
    },
    {
    Symbol: "MUE",
    CompanyName: "Blackrock MuniHoldings Quality Fund II, Inc. Common Stock"
    },
    {
    Symbol: "MUH",
    CompanyName: "Blackrock MuniHoldings Fund II, Inc. Common Stock"
    },
    {
    Symbol: "MUI",
    CompanyName: "Blackrock Muni Intermediate Duration Fund Inc Common Stock"
    },
    {
    Symbol: "MUJ",
    CompanyName: "Blackrock MuniHoldings New Jersey Quality Fund, Inc. Common Stock"
    },
    {
    Symbol: "MUR",
    CompanyName: "Murphy Oil Corporation Common Stock"
    },
    {
    Symbol: "MUS",
    CompanyName: "Blackrock MuniHoldings Quality Fund, Inc Common Stock"
    },
    {
    Symbol: "MUSA",
    CompanyName: "Murphy USA Inc. Common Stock"
    },
    {
    Symbol: "MUX",
    CompanyName: "McEwen Mining Inc. Common Stock"
    },
    {
    Symbol: "MVC",
    CompanyName: "MVC Capital, Inc. Common Stock"
    },
    {
    Symbol: "MVCB",
    CompanyName: "MVC Capital 7.25% Senior Notes due 2023"
    },
    {
    Symbol: "MVNR",
    CompanyName: "Mavenir Systems, Inc. Common Stock"
    },
    {
    Symbol: "MVO",
    CompanyName: "MV Oil Trust Units of Beneficial Interests"
    },
    {
    Symbol: "MVT",
    CompanyName: "Blackrock MuniVest Fund II, Inc. Common Stock"
    },
    {
    Symbol: "MW",
    CompanyName: "Men's Wearhouse, Inc. (The) Common Stock"
    },
    {
    Symbol: "MWA",
    CompanyName: "MUELLER WATER PRODUCTS Common Stock"
    },
    {
    Symbol: "MWE",
    CompanyName: "MarkWest Energy Partners, LP Common units representing limited partnership units"
    },
    {
    Symbol: "MWG",
    CompanyName: "Morgan Stanley Cap Tr IV Gtd Cap Secs"
    },
    {
    Symbol: "MWO",
    CompanyName: "Morgan Stanley Cap Tr V Gtd Cap Secs"
    },
    {
    Symbol: "MWR",
    CompanyName: "Morgan Stanley Cap Tr III Capital Trust Securities"
    },
    {
    Symbol: "MWV",
    CompanyName: "Meadwestvaco Corporation Common Stock"
    },
    {
    Symbol: "MWW",
    CompanyName: "Monster Worldwide, Inc. Common Stock"
    },
    {
    Symbol: "MX",
    CompanyName: "MagnaChip Semiconductor Corporation Depositary Shares, each representing one share of common stock"
    },
    {
    Symbol: "MXE",
    CompanyName: "Mexico Equity and Income Fund, Inc. (The) Common Stock"
    },
    {
    Symbol: "MXF",
    CompanyName: "Mexico Fund, Inc. (The) Common Stock"
    },
    {
    Symbol: "MXL",
    CompanyName: "MaxLinear, Inc Class A Common Stock"
    },
    {
    Symbol: "MY",
    CompanyName: "China Ming Yang Wind Power Group Limited American Depositary Shares, each representing one ordinary share $0.001 par value"
    },
    {
    Symbol: "MYC",
    CompanyName: "Blackrock MuniYield California Fund, Inc. Common Stock"
    },
    {
    Symbol: "MYCC",
    CompanyName: "ClubCorp Holdings, Inc. Common Stock"
    },
    {
    Symbol: "MYD",
    CompanyName: "Blackrock MuniYield Fund, Inc. Common Stock"
    },
    {
    Symbol: "MYE",
    CompanyName: "Myers Industries, Inc. Common Stock"
    },
    {
    Symbol: "MYF",
    CompanyName: "Blackrock MuniYield Investment Fund Common Stock"
    },
    {
    Symbol: "MYI",
    CompanyName: "Blackrock MuniYield Quality Fund III, Inc Common Stock"
    },
    {
    Symbol: "MYJ",
    CompanyName: "Blackrock MuniYield New Jersey Fund, Inc Common Stock"
    },
    {
    Symbol: "MYM",
    CompanyName: "Blackrock MuniYield Michigan Quality Fund II, Inc. Common Stock"
    },
    {
    Symbol: "MYN",
    CompanyName: "Blackrock MuniYield New York Quality Fund, Inc.Common Stock"
    },
    {
    Symbol: "MZF",
    CompanyName: "Managed Duration Investment Grade Municipal Fund"
    },
    {
    Symbol: "N",
    CompanyName: "Netsuite Inc Common Stock"
    },
    {
    Symbol: "NAC",
    CompanyName: "Nuveen California Dividend Advantage Municipal Fund Common Stock"
    },
    {
    Symbol: "NAD",
    CompanyName: "Nuveen Dividend Advantage Municipal Fund Common Stock"
    },
    {
    Symbol: "NADL",
    CompanyName: "North Atlantic Drilling Ltd. Common Shares"
    },
    {
    Symbol: "NAN",
    CompanyName: "Nuveen New York Dividend Advantage Municipal Fund Common Stock"
    },
    {
    Symbol: "NAO",
    CompanyName: "Nordic Amern Offshore Ltd Ordinary Shares Reg S (Marshall Islands)"
    },
    {
    Symbol: "NAP",
    CompanyName: "Navios Maritime Midstream Partners LP Common Units representing limited partner interests"
    },
    {
    Symbol: "NAT",
    CompanyName: "Nordic American Tankers Limited Common Stock"
    },
    {
    Symbol: "NAV",
    CompanyName: "Navistar International Corporation Common Stock"
    },
    {
    Symbol: "NAV$D",
    CompanyName: "Navistar International Corporation Preferred Stock"
    },
    {
    Symbol: "NAZ",
    CompanyName: "Nuveen Arizona Premium Income Municipal Fund Common Stock"
    },
    {
    Symbol: "NBB",
    CompanyName: "Nuveen Build America Bond Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "NBD",
    CompanyName: "Nuveen Build America Bond Opportunity Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "NBG",
    CompanyName: "Natl Bk Greece American Depositary Shares"
    },
    {
    Symbol: "NBG$A",
    CompanyName: "National Bank of Greece SA Sponsored ADR representing Series A Preferred Shares (Greece)"
    },
    {
    Symbol: "NBHC",
    CompanyName: "National Bank Holdings Corporation Common Stock"
    },
    {
    Symbol: "NBL",
    CompanyName: "Noble Energy Inc. Common Stock"
    },
    {
    Symbol: "NBR",
    CompanyName: "Nabors Industries Ltd."
    },
    {
    Symbol: "NC",
    CompanyName: "NACCO Industries, Inc. Common Stock"
    },
    {
    Symbol: "NCA",
    CompanyName: "Nuveen California Municipal Value Fund, Inc. Common Stock"
    },
    {
    Symbol: "NCFT",
    CompanyName: "Norcraft Companies, Inc. Common Stock"
    },
    {
    Symbol: "NCI",
    CompanyName: "Navigant Consulting, Inc. Common Stock"
    },
    {
    Symbol: "NCR",
    CompanyName: "NCR Corporation Common Stock"
    },
    {
    Symbol: "NCS",
    CompanyName: "NCI Building Systems, Inc. New Common Stock"
    },
    {
    Symbol: "NCT",
    CompanyName: "Newcastle Investment Corporation"
    },
    {
    Symbol: "NCT$B",
    CompanyName: "Newcastle Investment Corporation Preferred Series B"
    },
    {
    Symbol: "NCT$C",
    CompanyName: "Newcastle Investment Corporation Preferred Series C"
    },
    {
    Symbol: "NCT$D",
    CompanyName: "Newcastle Invt Corp New PFD Ser D%"
    },
    {
    Symbol: "NCV",
    CompanyName: "AllianzGI Convertible & Income Fund"
    },
    {
    Symbol: "NCZ",
    CompanyName: "AllianzGI Convertible & Income Fund II Common Shares of Beneficial Interest"
    },
    {
    Symbol: "NDP",
    CompanyName: "Tortoise Energy Independence Fund, Inc. Common Stock"
    },
    {
    Symbol: "NDRO",
    CompanyName: "Enduro Royalty Trust Trust Units representing beneficial interest in the trust"
    },
    {
    Symbol: "NE",
    CompanyName: "Noble Corporation Ordinary Shares (UK)"
    },
    {
    Symbol: "NEA",
    CompanyName: "Nuveen AMT"
    },
    {
    Symbol: "NEE",
    CompanyName: "NextEra Energy, Inc. Common Stock"
    },
    {
    Symbol: "NEE$C",
    CompanyName: "FPL Group, Inc. 5 7/8% Preferred Trust Securities"
    },
    {
    Symbol: "NEE$G",
    CompanyName: "NextEra Energy, Inc. Series G Junior Subordinated Debenture due March 1, 2072"
    },
    {
    Symbol: "NEE$H",
    CompanyName: "NextEra Energy, Inc. Series H Junior Subordinated Debentures due June 15, 2072"
    },
    {
    Symbol: "NEE$I",
    CompanyName: "NextEra Energy, Inc. Series I Junior Subordinated Debentures due November 15, 2072"
    },
    {
    Symbol: "NEE$J",
    CompanyName: "NextEra Energy, Inc. Series J Junior Subordinated Debentures due January 15, 2073"
    },
    {
    Symbol: "NEE$O",
    CompanyName: "NextEra Energy, Inc. Units Expiring 09/01/2015"
    },
    {
    Symbol: "NEE$P",
    CompanyName: "NextEra Energy, Inc. EQUITY UNIT"
    },
    {
    Symbol: "NEFF",
    CompanyName: "Neff Corporation Common Stock"
    },
    {
    Symbol: "NEM",
    CompanyName: "Newmont Mining Corporation"
    },
    {
    Symbol: "NEP",
    CompanyName: "NextEra Energy Partners, LP Common Units representing limited partner interests"
    },
    {
    Symbol: "NES",
    CompanyName: "Nuverra Environmental Solutions, Inc. Common Stock"
    },
    {
    Symbol: "NEU",
    CompanyName: "NewMarket Corp Common Stock"
    },
    {
    Symbol: "NEV",
    CompanyName: "Nuveen Enhanced Municipal Value Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "NEWM",
    CompanyName: "New Media Investment Group Inc. Common Stock"
    },
    {
    Symbol: "NEWR",
    CompanyName: "New Relic, Inc. Common Stock"
    },
    {
    Symbol: "NFG",
    CompanyName: "National Fuel Gas Company Common Stock"
    },
    {
    Symbol: "NFJ",
    CompanyName: "AllianzGI NFJ Dividend, Interest & Premium Strategy Fund"
    },
    {
    Symbol: "NFX",
    CompanyName: "Newfield Exploration Company Common Stock"
    },
    {
    Symbol: "NGG",
    CompanyName: "National Grid Transco, PLC National Grid PLC (NEW) American Depositary Shares"
    },
    {
    Symbol: "NGL",
    CompanyName: "NGL ENERGY PARTNERS LP Common Units representing Limited Partner Interests"
    },
    {
    Symbol: "NGLS",
    CompanyName: "Targa Resources Partners LP Common Units Representing Limited Partnership Interests"
    },
    {
    Symbol: "NGS",
    CompanyName: "Natural Gas Services Group, Inc. Common Stock"
    },
    {
    Symbol: "NGVC",
    CompanyName: "Natural Grocers by Vitamin Cottage, Inc. Common Stock"
    },
    {
    Symbol: "NHF",
    CompanyName: "NexPoint Credit Strategies Fund"
    },
    {
    Symbol: "NHI",
    CompanyName: "National Health Investors, Inc. Common Stock"
    },
    {
    Symbol: "NI",
    CompanyName: "NiSource Inc Common Stock"
    },
    {
    Symbol: "NID",
    CompanyName: "Nuveen Intermediate Duration Municipal Term Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "NIE",
    CompanyName: "AllianzGI Equity & Convertible Income Fund"
    },
    {
    Symbol: "NIM",
    CompanyName: "Nuveen Select Maturities Municipal Fund Common Stock"
    },
    {
    Symbol: "NIO",
    CompanyName: "Nuveen Municipal Opportunity Fund, Inc. Common Stock"
    },
    {
    Symbol: "NIQ",
    CompanyName: "Nuveenn Intermediate Duration Quality Municipal Term Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "NJ",
    CompanyName: "Nidec Corporation (Nihon Densan Kabushiki Kaisha) American Depositary Shares"
    },
    {
    Symbol: "NJR",
    CompanyName: "NewJersey Resources Corporation Common Stock"
    },
    {
    Symbol: "NKA",
    CompanyName: "Niska Gas Storage Partners LLC Common Units Representing Limited Liability Company Interests"
    },
    {
    Symbol: "NKE",
    CompanyName: "Nike, Inc. Common Stock"
    },
    {
    Symbol: "NKG",
    CompanyName: "Nuveen Georgia Dividend Advantage Municipal Fund 2 Nuveen Georgia Dividend Advantage Municipal Fund 2 (the"
    },
    {
    Symbol: "NKX",
    CompanyName: "Nuveen California AMT"
    },
    {
    Symbol: "NL",
    CompanyName: "NL Industries, Inc. Common Stock"
    },
    {
    Symbol: "NLS",
    CompanyName: "Nautilus, Inc. Common Stock"
    },
    {
    Symbol: "NLSN",
    CompanyName: "Nielsen N.V. Common Stock"
    },
    {
    Symbol: "NLY",
    CompanyName: "Annaly Capital Management Inc Common Stock"
    },
    {
    Symbol: "NLY$A",
    CompanyName: "Annaly Capital Management Inc Preferred Stock Series A"
    },
    {
    Symbol: "NLY$C",
    CompanyName: "Annaly Capital Management Inc 7.625% Series C Cumulative Redeemable Preferred Stock"
    },
    {
    Symbol: "NLY$D",
    CompanyName: "Annaly Capital Management Inc Preferred Series D"
    },
    {
    Symbol: "NM",
    CompanyName: "Navios Maritime Holdings Inc. Common Stock"
    },
    {
    Symbol: "NM$G",
    CompanyName: "Navios Maritime Holdings Inc. Sponsored ADR Representing 1/100th Perpetual Preferred Series G (Marshall Islands)"
    },
    {
    Symbol: "NM$H",
    CompanyName: "Navios Maritime Holdings Inc. Sponsored ADR Representing 1/100th Perp. Preferred Series H%"
    },
    {
    Symbol: "NMA",
    CompanyName: "Nuveen Municipal Advantage Fund, Inc. Common Stock"
    },
    {
    Symbol: "NMBL",
    CompanyName: "Nimble Storage, Inc. Common Stock"
    },
    {
    Symbol: "NMFC",
    CompanyName: "New Mountain Finance Corporation Common Stock"
    },
    {
    Symbol: "NMI",
    CompanyName: "Nuveen Municipal Income Fund, Inc. Common Stock"
    },
    {
    Symbol: "NMK$B",
    CompanyName: "Niagara Mohawk Holdings, Inc. Preferred Stock"
    },
    {
    Symbol: "NMK$C",
    CompanyName: "Niagara Mohawk Holdings, Inc. Preferred Stock"
    },
    {
    Symbol: "NMM",
    CompanyName: "Navios Maritime Partners LP Common Units Representing Limited Partner Interests"
    },
    {
    Symbol: "NMO",
    CompanyName: "Nuveen Municipal Market Opportunity Fund, Inc. Common Stock"
    },
    {
    Symbol: "NMR",
    CompanyName: "Nomura Holdings Inc ADR American Depositary Shares"
    },
    {
    Symbol: "NMS",
    CompanyName: "Nuveen Minnesota Municipal Income Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "NMT",
    CompanyName: "Nuveen Massachusetts Premium Income Municipal Fund Common Stock"
    },
    {
    Symbol: "NMY",
    CompanyName: "Nuveen Maryland Premium Income Municipal Fund Common Stock"
    },
    {
    Symbol: "NNA",
    CompanyName: "Navios Maritime Acquisition Corporation Common stock"
    },
    {
    Symbol: "NNC",
    CompanyName: "Nuveen North Carolina Premium Income Municipal Fund Common Stock"
    },
    {
    Symbol: "NNI",
    CompanyName: "Nelnet, Inc. Common Stock"
    },
    {
    Symbol: "NNN",
    CompanyName: "National Retail Properties Common Stock"
    },
    {
    Symbol: "NNN$D",
    CompanyName: "National Retail Properties Depositary Shares Representing 1/100th Preferred Series D"
    },
    {
    Symbol: "NNN$E",
    CompanyName: "National Retail Properties Depositary Shares, each representing a 1/100th interest in a share of 5.70% Series E Pfd."
    },
    {
    Symbol: "NNP",
    CompanyName: "Nuveen New York Performance Plus Municipal Fund, Inc. Common Stock"
    },
    {
    Symbol: "NNY",
    CompanyName: "Nuveen New York Municipal Value Fund, Inc. Common Stock"
    },
    {
    Symbol: "NOA",
    CompanyName: "North American Energy Partners, Inc. Common Shares (no par)"
    },
    {
    Symbol: "NOAH",
    CompanyName: "Noah Holdings Limited"
    },
    {
    Symbol: "NOC",
    CompanyName: "Northrop Grumman Corporation Common Stock"
    },
    {
    Symbol: "NOK",
    CompanyName: "Nokia Corporation Sponsored American Depositary Shares"
    },
    {
    Symbol: "NOM$C",
    CompanyName: "Nuveen Missouri Premium Income Municipal Fund MUNIFUND TERM PFD SHS SER 2015 (United States)"
    },
    {
    Symbol: "NOR",
    CompanyName: "Noranda Aluminum Holding Corporation Common Stock"
    },
    {
    Symbol: "NORD",
    CompanyName: "Nord Anglia Education, Inc. Ordinary Shares"
    },
    {
    Symbol: "NOV",
    CompanyName: "National Oilwell Varco, Inc. Common Stock"
    },
    {
    Symbol: "NOW",
    CompanyName: "ServiceNow, Inc. Common Stock"
    },
    {
    Symbol: "NP",
    CompanyName: "Neenah Paper, Inc. Common Stock"
    },
    {
    Symbol: "NPD",
    CompanyName: "China Nepstar Chain Drugstore Ltd American Depositary Shares"
    },
    {
    Symbol: "NPF",
    CompanyName: "Nuveen Premier Municipal Income Fund, Inc. Common Stock"
    },
    {
    Symbol: "NPI",
    CompanyName: "Nuveen Premium Income Municipal Fund, Inc. Common Stock"
    },
    {
    Symbol: "NPK",
    CompanyName: "National Presto Industries, Inc. Common Stock"
    },
    {
    Symbol: "NPM",
    CompanyName: "Nuveen Premium Income Municipal Fund II, Inc. Common Stock"
    },
    {
    Symbol: "NPO",
    CompanyName: "Enpro Industries Inc"
    },
    {
    Symbol: "NPP",
    CompanyName: "Nuveen Performance Plus Municipal Fund, Inc. Common Stock"
    },
    {
    Symbol: "NPT",
    CompanyName: "Nuveen Premium Income Municipal Fund IV, Inc. Common Stock"
    },
    {
    Symbol: "NPTN",
    CompanyName: "NeoPhotonics Corporation Common Stock"
    },
    {
    Symbol: "NPV",
    CompanyName: "Nuveen Virginia Premium Income Municipal Fund Common Stock"
    },
    {
    Symbol: "NQ",
    CompanyName: "NQ Mobile Inc. American Depositary Shares, each representing five Class A common shares"
    },
    {
    Symbol: "NQI",
    CompanyName: "Nuveen Quality Municipal Fund, Inc. Common Stock"
    },
    {
    Symbol: "NQM",
    CompanyName: "Nuveen Investment Quality Municipal Fund, Inc. Common Stock"
    },
    {
    Symbol: "NQP",
    CompanyName: "Nuveen Pennsylvania Investment Quality Municipal Fund, Inc. Common Stock"
    },
    {
    Symbol: "NQS",
    CompanyName: "Nuveen Select Quality Municipal Fund, Inc. Common Stock"
    },
    {
    Symbol: "NQU",
    CompanyName: "Nuveen Quality Income Municipal Fund, Inc. Common Stock"
    },
    {
    Symbol: "NR",
    CompanyName: "Newpark Resources, Inc. Common Stock"
    },
    {
    Symbol: "NRF",
    CompanyName: "NorthStar Realty Finance Corp. Common Stock (New)"
    },
    {
    Symbol: "NRF$A",
    CompanyName: "Northstar Realty Finance Corp. 8.75% Series A Cumulative Redeemable Preferred Stock"
    },
    {
    Symbol: "NRF$B",
    CompanyName: "Northstar Realty Finance Corp. Preferred Series B"
    },
    {
    Symbol: "NRF$C",
    CompanyName: "Northstar Realty Finance Corp. Preferred Series C"
    },
    {
    Symbol: "NRF$D",
    CompanyName: "Northstar Realty Finance Corp. 8.50% Series D Cumulative Redeemable Preferred Stock"
    },
    {
    Symbol: "NRF$E",
    CompanyName: "Northstar Realty Finance Corp. Preferred Stock Series E"
    },
    {
    Symbol: "NRG",
    CompanyName: "NRG Energy, Inc. Common Stock"
    },
    {
    Symbol: "NRK",
    CompanyName: "Nuveen New York AMT"
    },
    {
    Symbol: "NRP",
    CompanyName: "Natural Resource Partners LP Limited Partnership"
    },
    {
    Symbol: "NRT",
    CompanyName: "North European Oil Royality Trust Common Stock"
    },
    {
    Symbol: "NRZ",
    CompanyName: "New Residential Investment Corp. Common Stock"
    },
    {
    Symbol: "NS",
    CompanyName: "Nustar Energy L.P. Common Units"
    },
    {
    Symbol: "NSAM",
    CompanyName: "NorthStar Asset Management Group, Inc. Common Stock"
    },
    {
    Symbol: "NSC",
    CompanyName: "Norfolk Southern Corporation Common Stock"
    },
    {
    Symbol: "NSH",
    CompanyName: "Nustar GP Holdings, LLC Units"
    },
    {
    Symbol: "NSL",
    CompanyName: "Nuveen Senior Income Fund Common Stock"
    },
    {
    Symbol: "NSLP",
    CompanyName: "New Source Energy Partners L.P. Common Units Representing Limited Partner Interests"
    },
    {
    Symbol: "NSM",
    CompanyName: "Nationstar Mortgage Holdings Inc. Common Stock"
    },
    {
    Symbol: "NSP",
    CompanyName: "Insperity, Inc. Common Stock"
    },
    {
    Symbol: "NSR",
    CompanyName: "Neustar, Inc. Neustar, Inc. Class A Common Stock"
    },
    {
    Symbol: "NSS",
    CompanyName: "NuStar Logistics, L.P. 7.625% Fixed"
    },
    {
    Symbol: "NTC",
    CompanyName: "Nuveen Connecticut Premium Income Municipal Fund Common Stock"
    },
    {
    Symbol: "NTG",
    CompanyName: "Tortoise MLP Fund, Inc. Common Stock"
    },
    {
    Symbol: "NTI",
    CompanyName: "Northern Tier Energy LP Common Units representing Limited Partner Interests"
    },
    {
    Symbol: "NTL",
    CompanyName: "Nortel Inversora SA, ADR Common Stock"
    },
    {
    Symbol: "NTP",
    CompanyName: "Nam Tai Property Inc. Common Stock"
    },
    {
    Symbol: "NTT",
    CompanyName: "Nippon Telegraph and Telephone Corporation Common Stock"
    },
    {
    Symbol: "NTX",
    CompanyName: "Nuveen Texas Quality Income Municipal Fund Common Stock"
    },
    {
    Symbol: "NTX$C",
    CompanyName: "Nuveen Texas Quality Income Municipal Fund Munifund Term Pfd Shs Ser 2013"
    },
    {
    Symbol: "NTZ",
    CompanyName: "Natuzzi, S.p.A."
    },
    {
    Symbol: "NU",
    CompanyName: "Northeast Utilities Common Stock"
    },
    {
    Symbol: "NUE",
    CompanyName: "Nucor Corporation Common Stock"
    },
    {
    Symbol: "NUM",
    CompanyName: "Nuveen Michigan Quality Income Municipal Fund Common Stock"
    },
    {
    Symbol: "NUO",
    CompanyName: "Nuveen Ohio Quality Income Municipal Fund Common Stock"
    },
    {
    Symbol: "NUS",
    CompanyName: "Nu Skin Enterprises, Inc. Common Stock"
    },
    {
    Symbol: "NUV",
    CompanyName: "Nuveen Municipal Value Fund, Inc. Common Stock"
    },
    {
    Symbol: "NUW",
    CompanyName: "Nuveen AMT"
    },
    {
    Symbol: "NVGS",
    CompanyName: "Navigator Holdings Ltd. Ordinary Shares (Marshall Islands)"
    },
    {
    Symbol: "NVO",
    CompanyName: "Novo Nordisk A/S Common Stock"
    },
    {
    Symbol: "NVR",
    CompanyName: "NVR, Inc. Common Stock"
    },
    {
    Symbol: "NVRO",
    CompanyName: "Nevro Corp. Common Stock"
    },
    {
    Symbol: "NVS",
    CompanyName: "Novartis AG Common Stock"
    },
    {
    Symbol: "NW$C",
    CompanyName: "Natl Westminster Pfd Preferred Stock"
    },
    {
    Symbol: "NWE",
    CompanyName: "NorthWestern Corporation Common Stock"
    },
    {
    Symbol: "NWHM",
    CompanyName: "New Home Company Inc. (The) Common Stock"
    },
    {
    Symbol: "NWL",
    CompanyName: "Newell Rubbermaid Inc. Common Stock"
    },
    {
    Symbol: "NWN",
    CompanyName: "Northwest Natural Gas Company Common Stock"
    },
    {
    Symbol: "NWY",
    CompanyName: "New York & Company, Inc. New York & Company, Inc. Common Shares"
    },
    {
    Symbol: "NX",
    CompanyName: "Quanex Building Products Corporation Common Stock"
    },
    {
    Symbol: "NXC",
    CompanyName: "Nuveen California Select Tax"
    },
    {
    Symbol: "NXJ",
    CompanyName: "Nuveen New Jersey Dividend Advantage Municipal Fund Share of Beneficial Interest"
    },
    {
    Symbol: "NXJ$C",
    CompanyName: "Nuveen New Jersey Dividend Advantage Municipal Fund MuniFund Term Preferred Shares, 2.00% Series 2015, $10.00 Liquidation preference per share"
    },
    {
    Symbol: "NXN",
    CompanyName: "Nuveen New York Select Tax"
    },
    {
    Symbol: "NXP",
    CompanyName: "Nuveen Select Tax Free Income Portfolio Common Stock"
    },
    {
    Symbol: "NXQ",
    CompanyName: "Nuveen Select Tax Free Income Portfolio II Common Stock"
    },
    {
    Symbol: "NXR",
    CompanyName: "Nuveen Select Tax Free Income Portfolio III Common Stock"
    },
    {
    Symbol: "NYCB",
    CompanyName: "New York Community Bancorp, Inc. Common Stock"
    },
    {
    Symbol: "NYCB$U",
    CompanyName: "New York Community Bancorp, Inc. New York Community Capital Tr V (BONUSES)"
    },
    {
    Symbol: "NYLD",
    CompanyName: "NRG Yield, Inc. Class A Common Stock"
    },
    {
    Symbol: "NYRT",
    CompanyName: "New York REIT, Inc. Common Stock"
    },
    {
    Symbol: "NYT",
    CompanyName: "New York Times Company (The) Common Stock"
    },
    {
    Symbol: "O",
    CompanyName: "Realty Income Corporation Common Stock"
    },
    {
    Symbol: "O$F",
    CompanyName: "Realty Income Corporation Monthly Income Cumulative Red Preferred Stock Class F"
    },
    {
    Symbol: "OAK",
    CompanyName: "Oaktree Capital Group, LLC Class A Units Representing Limited Liability Company Interests"
    },
    {
    Symbol: "OAKS",
    CompanyName: "Five Oaks Investment Corp. Common Stock"
    },
    {
    Symbol: "OAKS$A",
    CompanyName: "Five Oaks Investment Corp. 8.75% Series A Cumulative Redeemable Preferred Stock"
    },
    {
    Symbol: "OAS",
    CompanyName: "Oasis Petroleum Inc. Common Stock"
    },
    {
    Symbol: "OB",
    CompanyName: "OneBeacon Insurance Group, Ltd. Class A Common Stock"
    },
    {
    Symbol: "OC",
    CompanyName: "Owens Corning Inc Common Stock New"
    },
    {
    Symbol: "OCIP",
    CompanyName: "OCI Partners LP Common Units representing Limited Partner Interests"
    },
    {
    Symbol: "OCIR",
    CompanyName: "OCI Resources LP Common Units representing Limited Partner Interests"
    },
    {
    Symbol: "OCN",
    CompanyName: "Ocwen Financial Corporation NEW Common Stock"
    },
    {
    Symbol: "OCR",
    CompanyName: "Omnicare, Inc. Common Stock"
    },
    {
    Symbol: "OCR$A",
    CompanyName: "Omnicare, Inc. Trust Preferred Income Equity Redeemable Securities (PIERS)"
    },
    {
    Symbol: "OCR$B",
    CompanyName: "Omnicare, Inc. Omnicare Capital Trust II Series B 4.00% Trust Preferred Income Equity Redeemable Securities (PIERS)"
    },
    {
    Symbol: "ODC",
    CompanyName: "Oil"
    },
    {
    Symbol: "OEC",
    CompanyName: "Orion Engineered Carbons S.A Common Shares"
    },
    {
    Symbol: "OFC",
    CompanyName: "Corporate Office Properties Trust Common Stock"
    },
    {
    Symbol: "OFC$L",
    CompanyName: "Corporate Office Properties Trust Preferred Series L"
    },
    {
    Symbol: "OFG",
    CompanyName: "OFG Bancorp Common Stock"
    },
    {
    Symbol: "OFG$A",
    CompanyName: "OFG Bancorp Preferred Stock"
    },
    {
    Symbol: "OFG$B",
    CompanyName: "OFG Bancorp 7.0% Non Cumulative Monthly Income Preferred Stock Series B"
    },
    {
    Symbol: "OFG$D",
    CompanyName: "OFG Bancorp 7.125% Non"
    },
    {
    Symbol: "OGE",
    CompanyName: "OGE Energy Corporation Common Stock"
    },
    {
    Symbol: "OGS",
    CompanyName: "ONE Gas, Inc. Common Stock"
    },
    {
    Symbol: "OHI",
    CompanyName: "Omega Healthcare Investors, Inc. Common Stock"
    },
    {
    Symbol: "OI",
    CompanyName: "Owens"
    },
    {
    Symbol: "OIA",
    CompanyName: "Invesco Municipal Income Opportunities Trust Common Stock"
    },
    {
    Symbol: "OIBR",
    CompanyName: "Oi S.A. American Depositary Shares (Each representing 1 Preferred Share)"
    },
    {
    Symbol: "OIBR.C",
    CompanyName: "Oi S.A. American Depositary Shares, (Each representing 1 Common Share)"
    },
    {
    Symbol: "OII",
    CompanyName: "Oceaneering International, Inc. Common Stock"
    },
    {
    Symbol: "OILT",
    CompanyName: "Oiltanking Partners, L.P. Common Units Representing Limited Partnership Interests"
    },
    {
    Symbol: "OIS",
    CompanyName: "Oil States International, Inc. Common Stock"
    },
    {
    Symbol: "OKE",
    CompanyName: "ONEOK, Inc. Common Stock"
    },
    {
    Symbol: "OKS",
    CompanyName: "ONEOK Partners, L.P. Common Stock"
    },
    {
    Symbol: "OLN",
    CompanyName: "Olin Corporation Common Stock"
    },
    {
    Symbol: "OLP",
    CompanyName: "One Liberty Properties, Inc. Common Stock"
    },
    {
    Symbol: "OMAM",
    CompanyName: "OM Asset Management plc Ordinary Shares"
    },
    {
    Symbol: "OMC",
    CompanyName: "Omnicom Group Inc. Common Stock"
    },
    {
    Symbol: "OME",
    CompanyName: "Omega Protein Corporation Common Stock"
    },
    {
    Symbol: "OMG",
    CompanyName: "OM Group, Inc. Common Stock"
    },
    {
    Symbol: "OMI",
    CompanyName: "Owens & Minor, Inc. Common Stock"
    },
    {
    Symbol: "OMN",
    CompanyName: "OMNOVA Solutions Inc. Common Stock"
    },
    {
    Symbol: "ONDK",
    CompanyName: "On Deck Capital, Inc. Common Stock"
    },
    {
    Symbol: "ONE",
    CompanyName: "Higher One Holdings, Inc. Common Stock"
    },
    {
    Symbol: "OPK",
    CompanyName: "OPKO Health Inc. Common Stock"
    },
    {
    Symbol: "OPWR",
    CompanyName: "Opower, Inc. Common Stock"
    },
    {
    Symbol: "OPY",
    CompanyName: "Oppenheimer Holdings, Inc. Class A Common Stock (DE)"
    },
    {
    Symbol: "ORA",
    CompanyName: "Ormat Technologies, Inc. Common Stock"
    },
    {
    Symbol: "ORAN",
    CompanyName: "Orange"
    },
    {
    Symbol: "ORB",
    CompanyName: "Orbital Sciences Corporation Common Stock"
    },
    {
    Symbol: "ORC",
    CompanyName: "Orchid Island Capital, Inc. Common Stock"
    },
    {
    Symbol: "ORCL",
    CompanyName: "Oracle Corporation Common Stock"
    },
    {
    Symbol: "ORI",
    CompanyName: "Old Republic International Corporation Common Stock"
    },
    {
    Symbol: "ORN",
    CompanyName: "Orion Marine Group Inc Common"
    },
    {
    Symbol: "OSK",
    CompanyName: "Oshkosh Corporation (Holding Company)Common Stock"
    },
    {
    Symbol: "OUBS",
    CompanyName: "UBS AG Common Stock"
    },
    {
    Symbol: "OUT",
    CompanyName: "OUTFRONT Media Inc. Common Stock"
    },
    {
    Symbol: "OWW",
    CompanyName: "Orbitz Worldwide, Inc. Common Stock"
    },
    {
    Symbol: "OXM",
    CompanyName: "Oxford Industries, Inc. Common Stock"
    },
    {
    Symbol: "OXY",
    CompanyName: "Occidental Petroleum Corporation Common Stock"
    },
    {
    Symbol: "OZM",
    CompanyName: "Och"
    },
    {
    Symbol: "P",
    CompanyName: "Pandora Media, Inc. Common Stock"
    },
    {
    Symbol: "PAA",
    CompanyName: "Plains All American Pipeline, L.P. Common Stock"
    },
    {
    Symbol: "PAC",
    CompanyName: "Grupo Aeroportuario Del Pacifico, S.A. B. de C.V. Grupo Aeroportuario Del Pacifico, S.A. de C.V. (each representing 10 Series B shares)"
    },
    {
    Symbol: "PACD",
    CompanyName: "Pacific Drilling S.A. Common Shares"
    },
    {
    Symbol: "PAG",
    CompanyName: "Penske Automotive Group, Inc. Common Stock"
    },
    {
    Symbol: "PAGP",
    CompanyName: "Plains Group Holdings, L.P. Class A Shares representing limited partner interests"
    },
    {
    Symbol: "PAH",
    CompanyName: "Platform Specialty Products Corporation Common Stock"
    },
    {
    Symbol: "PAI",
    CompanyName: "Western Asset Income Fund Common Stock"
    },
    {
    Symbol: "PAM",
    CompanyName: "Pampa Energia S.A. Pampa Energia S.A."
    },
    {
    Symbol: "PANW",
    CompanyName: "Palo Alto Networks, Inc. Common Stock"
    },
    {
    Symbol: "PAR",
    CompanyName: "PAR Technology Corporation Common Stock"
    },
    {
    Symbol: "PAY",
    CompanyName: "Verifone Systems, Inc. Common Stock"
    },
    {
    Symbol: "PAYC",
    CompanyName: "Paycom Software, Inc. Common Stock"
    },
    {
    Symbol: "PB",
    CompanyName: "Prosperity Bancshares, Inc. Common Stock"
    },
    {
    Symbol: "PBA",
    CompanyName: "Pembina Pipeline Corp. Ordinary Shares (Canada)"
    },
    {
    Symbol: "PBF",
    CompanyName: "PBF Energy Inc. Class A Common Stock"
    },
    {
    Symbol: "PBFX",
    CompanyName: "PBF Logistics LP Common Units representing limited partner interests"
    },
    {
    Symbol: "PBH",
    CompanyName: "Prestige Brand Holdings, Inc. Common Stock"
    },
    {
    Symbol: "PBI",
    CompanyName: "Pitney Bowes Inc. Common Stock"
    },
    {
    Symbol: "PBI$A",
    CompanyName: "Pitney Bowes Inc 5.25% Notes due 2022"
    },
    {
    Symbol: "PBI$B",
    CompanyName: "Pitney Bowes Inc 6.70% Notes Due 2043"
    },
    {
    Symbol: "PBR",
    CompanyName: "Petroleo Brasileiro S.A."
    },
    {
    Symbol: "PBR.A",
    CompanyName: "Petroleo Brasileiro S.A."
    },
    {
    Symbol: "PBT",
    CompanyName: "Permian Basin Royalty Trust Common Stock"
    },
    {
    Symbol: "PBY",
    CompanyName: "Pep Boys"
    },
    {
    Symbol: "PBYI",
    CompanyName: "Puma Biotechnology Inc Common Stock"
    },
    {
    Symbol: "PCF",
    CompanyName: "Putnam High Income Securities Fund Common Stock"
    },
    {
    Symbol: "PCG",
    CompanyName: "Pacific Gas & Electric Co. Common Stock"
    },
    {
    Symbol: "PCI",
    CompanyName: "PIMCO Dynamic Credit Income Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "PCK",
    CompanyName: "Pimco California Municipal Income Fund II Common Shares of Beneficial Interest"
    },
    {
    Symbol: "PCL",
    CompanyName: "Plum Creek Timber Company, Inc. Common Stock"
    },
    {
    Symbol: "PCM",
    CompanyName: "PCM Fund, Inc. Common Stock"
    },
    {
    Symbol: "PCN",
    CompanyName: "Pimco Corporate & Income Strategy Fund Common Stock"
    },
    {
    Symbol: "PCP",
    CompanyName: "Precision Castparts Corporation Common Stock"
    },
    {
    Symbol: "PCQ",
    CompanyName: "PIMCO California Municipal Income Fund Common Stock"
    },
    {
    Symbol: "PDI",
    CompanyName: "PIMCO Dynamic Income Fund Common Stock"
    },
    {
    Symbol: "PDM",
    CompanyName: "Piedmont Office Realty Trust, Inc. Class A Common Stock"
    },
    {
    Symbol: "PDS",
    CompanyName: "Precision Drilling Corporation Common Stock"
    },
    {
    Symbol: "PDT",
    CompanyName: "John Hancock Premium Dividend Fund"
    },
    {
    Symbol: "PE",
    CompanyName: "Parsley Energy, Inc. Class A Common Stock"
    },
    {
    Symbol: "PEB",
    CompanyName: "Pebblebrook Hotel Trust Common Shares of Beneficial Interest"
    },
    {
    Symbol: "PEB$A",
    CompanyName: "Pebblebrook Hotel Trust PFD SER A"
    },
    {
    Symbol: "PEB$B",
    CompanyName: "Pebblebrook Hotel Trust Preferred Series B"
    },
    {
    Symbol: "PEB$C",
    CompanyName: "Pebblebrook Hotel Trust 6.50% Series C Cumulative Redeemable Preferred Shares of Beneficial Interest"
    },
    {
    Symbol: "PEG",
    CompanyName: "Public Service Enterprise Group Incorporated Common Stock"
    },
    {
    Symbol: "PEI",
    CompanyName: "Pennsylvania Real Estate Investment Trust Common Stock"
    },
    {
    Symbol: "PEI$A",
    CompanyName: "Pennsylvania Real Estate Investment Trust PFD sh CL A"
    },
    {
    Symbol: "PEI$B",
    CompanyName: "Pennsylvania Real Estate Investment Trust Cumulative Redeemable Perpetual Preferred Shares Series B"
    },
    {
    Symbol: "PEO",
    CompanyName: "Petroleum Resources Corporation Common Stock"
    },
    {
    Symbol: "PEP",
    CompanyName: "Pepsico, Inc. Common Stock"
    },
    {
    Symbol: "PER",
    CompanyName: "SandRidge Permian Trust Common Units of Benficial Interest"
    },
    {
    Symbol: "PES",
    CompanyName: "Pioneer Energy Services Corp. Common Stk"
    },
    {
    Symbol: "PF",
    CompanyName: "Pinnacle Foods, Inc. Common Stock"
    },
    {
    Symbol: "PFD",
    CompanyName: "Flaherty & Crumrine Preferred Income Fund Incorporated Common Stock"
    },
    {
    Symbol: "PFE",
    CompanyName: "Pfizer, Inc. Common Stock"
    },
    {
    Symbol: "PFG",
    CompanyName: "Principal Financial Group Inc Common Stock"
    },
    {
    Symbol: "PFG$B",
    CompanyName: "Principal Financial Group, Inc. 6.518% Series B Non"
    },
    {
    Symbol: "PFH",
    CompanyName: "Cabco Tr Jcp 7.625 Common Stock"
    },
    {
    Symbol: "PFK",
    CompanyName: "Prudential Financial Inflation"
    },
    {
    Symbol: "PFL",
    CompanyName: "PIMCO Income Strategy Fund Shares of Beneficial Interest"
    },
    {
    Symbol: "PFN",
    CompanyName: "PIMCO Income Strategy Fund II"
    },
    {
    Symbol: "PFO",
    CompanyName: "Flaherty & Crumrine Preferred Income Opportunity Fund Incorporated Common Stock"
    },
    {
    Symbol: "PFS",
    CompanyName: "Provident Financial Services, Inc Common Stock"
    },
    {
    Symbol: "PFSI",
    CompanyName: "PennyMac Financial Services, Inc. Class A Common Stock"
    },
    {
    Symbol: "PFX",
    CompanyName: "Phoenix Companies, Inc. Phoenix Companies Inc 7.45% Pfd"
    },
    {
    Symbol: "PG",
    CompanyName: "Procter & Gamble Company (The) Common Stock"
    },
    {
    Symbol: "PGEM",
    CompanyName: "Ply Gem Holdings, Inc. Common Stock"
    },
    {
    Symbol: "PGH",
    CompanyName: "Pengrowth Energy Corporation"
    },
    {
    Symbol: "PGI",
    CompanyName: "Premiere Global Services, Inc."
    },
    {
    Symbol: "PGN",
    CompanyName: "Paragon Offshore plc Ordinary Shares"
    },
    {
    Symbol: "PGP",
    CompanyName: "Pimco Global Stocksplus & Income Fund Pimco Global StocksPlus & Income Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "PGR",
    CompanyName: "Progressive Corporation (The) Common Stock"
    },
    {
    Symbol: "PGRE",
    CompanyName: "Paramount Group, Inc. Common Stock"
    },
    {
    Symbol: "PGZ",
    CompanyName: "Principal Real Estate Income Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "PH",
    CompanyName: "Parker"
    },
    {
    Symbol: "PHD",
    CompanyName: "Pioneer Floating Rate Trust Pioneer Floating Rate Trust Shares of Beneficial Interest"
    },
    {
    Symbol: "PHG",
    CompanyName: "Koninklijke Philips N.V. NY Registry Shares"
    },
    {
    Symbol: "PHH",
    CompanyName: "PHH Corp Common Stock"
    },
    {
    Symbol: "PHI",
    CompanyName: "Philippine Long Distance Telephone Company Sponsored ADR"
    },
    {
    Symbol: "PHK",
    CompanyName: "Pimco High Income Fund Pimco High Income Fund"
    },
    {
    Symbol: "PHM",
    CompanyName: "PulteGroup, Inc. Common Stock"
    },
    {
    Symbol: "PHT",
    CompanyName: "Pioneer High Income Trust Common Shares of Beneficial Interest"
    },
    {
    Symbol: "PHX",
    CompanyName: "Panhandle Oil and Gas Inc Common Stock"
    },
    {
    Symbol: "PII",
    CompanyName: "Polaris Industries Inc. Common Stock"
    },
    {
    Symbol: "PIM",
    CompanyName: "Putnam Master Intermediate Income Trust Common Stock"
    },
    {
    Symbol: "PIR",
    CompanyName: "Pier 1 Imports, Inc. Common Stock"
    },
    {
    Symbol: "PIY",
    CompanyName: "Preferred Plus Trust (Ser CZN) Preferred Plus Trust Ser CZN"
    },
    {
    Symbol: "PJC",
    CompanyName: "Piper Jaffray Companies Common Stock"
    },
    {
    Symbol: "PJH",
    CompanyName: "Prudential Financial, Inc. 5.75% Junior Subordinated Notes due 2052"
    },
    {
    Symbol: "PJS",
    CompanyName: "PreferredPlus Trust Ser FAR 1 Tr Ctf"
    },
    {
    Symbol: "PKD",
    CompanyName: "Parker Drilling Company Common Stock"
    },
    {
    Symbol: "PKE",
    CompanyName: "Park Electrochemical Corporation Common Stock"
    },
    {
    Symbol: "PKG",
    CompanyName: "Packaging Corporation of America Common Stock"
    },
    {
    Symbol: "PKI",
    CompanyName: "PerkinElmer, Inc. Common Stock"
    },
    {
    Symbol: "PKO",
    CompanyName: "Pimco Income Opportunity Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "PKX",
    CompanyName: "POSCO Common Stock"
    },
    {
    Symbol: "PKY",
    CompanyName: "Parkway Properties, Inc. Common Stock"
    },
    {
    Symbol: "PL",
    CompanyName: "Protective Life Corporation Common Stock"
    },
    {
    Symbol: "PL$B",
    CompanyName: "Protective Life Corporation PLC Capital Trust V Trust Originated Preferred Securities (TOPRS)"
    },
    {
    Symbol: "PL$C",
    CompanyName: "Protective Life Corporation 6.25% Subordinated Debentures due 2042"
    },
    {
    Symbol: "PL$E",
    CompanyName: "Protective Life Corporation 6.00% Subordinated Debentures due 2042"
    },
    {
    Symbol: "PLD",
    CompanyName: "ProLogis, Inc. Common Stock"
    },
    {
    Symbol: "PLL",
    CompanyName: "Pall Corporation Common Stock"
    },
    {
    Symbol: "PLOW",
    CompanyName: "Douglas Dynamics, Inc. Common Stock"
    },
    {
    Symbol: "PLT",
    CompanyName: "Plantronics, Inc. Common Stock"
    },
    {
    Symbol: "PM",
    CompanyName: "Philip Morris International Inc Common Stock"
    },
    {
    Symbol: "PMC",
    CompanyName: "Pharmerica Corporation Common Stock"
    },
    {
    Symbol: "PMF",
    CompanyName: "PIMCO Municipal Income Fund Common Stock"
    },
    {
    Symbol: "PML",
    CompanyName: "Pimco Municipal Income Fund II Common Shares of Beneficial Interest"
    },
    {
    Symbol: "PMM",
    CompanyName: "Putnam Managed Municipal Income Trust Common Stock"
    },
    {
    Symbol: "PMO",
    CompanyName: "Putnam Municipal Opportunities Trust Common Stock"
    },
    {
    Symbol: "PMT",
    CompanyName: "PennyMac Mortgage Investment Trust Common Shares of Beneficial Interest"
    },
    {
    Symbol: "PMX",
    CompanyName: "PIMCO Municipal Income Fund III Common Shares of Beneficial Interest"
    },
    {
    Symbol: "PNC",
    CompanyName: "PNC Financial Services Group, Inc. (The) Common Stock"
    },
    {
    Symbol: "PNC$P",
    CompanyName: "PNC Financial Services Group, Inc. (The) Depositary Shares Representing 1/4000th Perpetual Preferred Series P"
    },
    {
    Symbol: "PNC$Q",
    CompanyName: "PNC Financial Services Group, Inc. (The) Depositary Shares Representing 1/4000th Perpetual Preferred Shares Series Q"
    },
    {
    Symbol: "PNC.W",
    CompanyName: "PNC Financial Services Group, Inc. Warrant expiring December 31, 2018"
    },
    {
    Symbol: "PNF",
    CompanyName: "PIMCO New York Municipal Income Fund Common Stock"
    },
    {
    Symbol: "PNI",
    CompanyName: "Pimco New York Municipal Income Fund II Common Shares of Beneficial Interest"
    },
    {
    Symbol: "PNK",
    CompanyName: "Pinnacle Entertainment, Inc. Common Stock"
    },
    {
    Symbol: "PNM",
    CompanyName: "PNM Resources, Inc. (Holding Co.) Common Stock"
    },
    {
    Symbol: "PNR",
    CompanyName: "Pentair plc. Ordinary Share"
    },
    {
    Symbol: "PNTA",
    CompanyName: "PennantPark Investment Corporation 6.25% Senior Notes due 2025"
    },
    {
    Symbol: "PNW",
    CompanyName: "Pinnacle West Capital Corporation Common Stock"
    },
    {
    Symbol: "PNX",
    CompanyName: "Phoenix Companies, Inc. (The) Common Stock"
    },
    {
    Symbol: "PNY",
    CompanyName: "Piedmont Natural Gas Company, Inc. Common Stock"
    },
    {
    Symbol: "POL",
    CompanyName: "PolyOne Corporation Common Stock"
    },
    {
    Symbol: "POM",
    CompanyName: "PEPCO Holdings, Inc Common Stock"
    },
    {
    Symbol: "POR",
    CompanyName: "Portland General Electric Co Common Stock"
    },
    {
    Symbol: "POST",
    CompanyName: "Post Holdings, Inc. Common Stock"
    },
    {
    Symbol: "POT",
    CompanyName: "Potash Corporation of Saskatchewan Inc. Common Stock"
    },
    {
    Symbol: "POWR",
    CompanyName: "PowerSecure International, Inc. Common Stock"
    },
    {
    Symbol: "PPG",
    CompanyName: "PPG Industries, Inc. Common Stock"
    },
    {
    Symbol: "PPL",
    CompanyName: "PP&L Corporation Common Stock"
    },
    {
    Symbol: "PPO",
    CompanyName: "Polypore International Inc Common Stock"
    },
    {
    Symbol: "PPP",
    CompanyName: "Primero Mining Corp. New Common Shares (Canada)"
    },
    {
    Symbol: "PPR",
    CompanyName: "Voya Prime Rate Trust Shares of Beneficial Interest"
    },
    {
    Symbol: "PPS",
    CompanyName: "Post Properties, Inc. Common Stock"
    },
    {
    Symbol: "PPS$A",
    CompanyName: "Post Properties, Inc. Preferred Stock"
    },
    {
    Symbol: "PPT",
    CompanyName: "Putnam Premier Income Trust Common Stock"
    },
    {
    Symbol: "PPX",
    CompanyName: "PPL Capital Funding, Inc. 2013 Series B Junior Subordinated Notes due 2073"
    },
    {
    Symbol: "PQ",
    CompanyName: "Petroquest Energy Inc Common Stock"
    },
    {
    Symbol: "PRA",
    CompanyName: "ProAssurance Corporation Common Stock"
    },
    {
    Symbol: "PRE",
    CompanyName: "PartnerRe Ltd. Common Stock"
    },
    {
    Symbol: "PRE$D",
    CompanyName: "PartnerRe Ltd. Preferred Series D 6.5% (Bermuda)"
    },
    {
    Symbol: "PRE$E",
    CompanyName: "PartnerRe Ltd. PFD SER E (Bermuda)"
    },
    {
    Symbol: "PRE$F",
    CompanyName: "PartnerRe Ltd. Redeemable Preferred Shares Series F (Bermuda)"
    },
    {
    Symbol: "PRGO",
    CompanyName: "Perrigo Company plc Ordinary Shares"
    },
    {
    Symbol: "PRH",
    CompanyName: "Prudential Financial, Inc. 5.70% Junior Subordinated Notes due 2053"
    },
    {
    Symbol: "PRI",
    CompanyName: "Primerica, Inc. Common Stock"
    },
    {
    Symbol: "PRLB",
    CompanyName: "Proto Labs, Inc. Common stock"
    },
    {
    Symbol: "PRO",
    CompanyName: "PROS Holdings, Inc. Common Stock"
    },
    {
    Symbol: "PRU",
    CompanyName: "Prudential Financial, Inc. Common Stock"
    },
    {
    Symbol: "PRY",
    CompanyName: "Prospect Capital Corporation 6.95% Senior Notes due 2022"
    },
    {
    Symbol: "PSA",
    CompanyName: "Public Storage Common Stock"
    },
    {
    Symbol: "PSA$A",
    CompanyName: "Public Storage Depositary Shares each representing 1/1,000 of a 5.875% Cumulative Preferred SBI, Series A"
    },
    {
    Symbol: "PSA$O",
    CompanyName: "Public Storage Depositary Shares Representing 1/1000% Cumulative Pfd Sh Ben Int Series O"
    },
    {
    Symbol: "PSA$P",
    CompanyName: "Public Storage DEPOSITARY SHS REPSTG % CUMULATIVE PFD SHS BEN INT (SER P)"
    },
    {
    Symbol: "PSA$Q",
    CompanyName: "Public Storage DEPOSITARY SHS REPSTG 1/1000TH PFD SHS BEN INT SER Q"
    },
    {
    Symbol: "PSA$R",
    CompanyName: "Public Storage Depository Sh Repstg 1/1000th Pfd Ser R"
    },
    {
    Symbol: "PSA$S",
    CompanyName: "Public Storage DEP SH REPSTG PFD SH BEN INT SER S"
    },
    {
    Symbol: "PSA$T",
    CompanyName: "Public Storage Depository Shares Representing 1/1000 Pfd Shares Beneficial Interest Series T"
    },
    {
    Symbol: "PSA$U",
    CompanyName: "Public Storage Depositary Shares Representing 1/1000 Preferred Benerficial Interest Series U"
    },
    {
    Symbol: "PSA$V",
    CompanyName: "Public Storage Dep Shs Repstg 1/1000th Pfd Sh Ben Int Ser V"
    },
    {
    Symbol: "PSA$W",
    CompanyName: "Public Storage Depositary Shares Representing 1/1000 Preferred Shares of Benficial Interest Series W"
    },
    {
    Symbol: "PSA$X",
    CompanyName: "Public Storage Depositary Shares Representing 1/1000th Cumulative Preferred Shares Beneficial Interest Series X"
    },
    {
    Symbol: "PSA$Y",
    CompanyName: "Public Storage Dep Shs Repstg 1/1000th Pfd Sh Ben Int Ser Y"
    },
    {
    Symbol: "PSA$Z",
    CompanyName: "Public Storage Dep Shs Representing 1/1000th Pfd Sh Ben Int Ser Z"
    },
    {
    Symbol: "PSB",
    CompanyName: "PS Business Parks, Inc. Common Stock"
    },
    {
    Symbol: "PSB$R",
    CompanyName: "PS Business Parks, Inc. Depositary Shares, Each representing 1/1,000 of a share of 6.875% Cumulative Preferred stock, Series R, $0.01 par"
    },
    {
    Symbol: "PSB$S",
    CompanyName: "PS Business Parks, Inc. Depositary Shares, each representing 1/1,000 of a share of 6.45% Cumulative Preferred Stock"
    },
    {
    Symbol: "PSB$T",
    CompanyName: "PS Business Parks, Inc. Depositary Shares Representing 1/1000th Preferred Series T"
    },
    {
    Symbol: "PSB$U",
    CompanyName: "PS Business Parks, Inc. Dep Shs Repstg 1/1000 Pfd Ser U"
    },
    {
    Symbol: "PSB$V",
    CompanyName: "PS Business Parks, Inc. Depositary Shares Represting 1/1000th Shares Cumulative Preferred Stock Series V"
    },
    {
    Symbol: "PSF",
    CompanyName: "Cohen & Steers Select Preferred and Income Fund, Inc. Common Stock"
    },
    {
    Symbol: "PSG",
    CompanyName: "Performance Sports Group Ltd. Ordinary Shares (Canada)"
    },
    {
    Symbol: "PSO",
    CompanyName: "Pearson, Plc Common Stock"
    },
    {
    Symbol: "PSX",
    CompanyName: "Phillips 66 Common Stock"
    },
    {
    Symbol: "PSXP",
    CompanyName: "Phillips 66 Partners LP Common Units representing limited partner interest in the Partnership"
    },
    {
    Symbol: "PT",
    CompanyName: "Portugal Telecom SGPS, S.A . Common Stock"
    },
    {
    Symbol: "PTP",
    CompanyName: "Platinum Underwriters Holdings, Ltd"
    },
    {
    Symbol: "PTR",
    CompanyName: "PetroChina Company Limited Common Stock"
    },
    {
    Symbol: "PTY",
    CompanyName: "Pimco Corporate & Income Opportunity Fund"
    },
    {
    Symbol: "PUK",
    CompanyName: "Prudential Public Limited Company Common Stock"
    },
    {
    Symbol: "PUK$",
    CompanyName: "Prudential Public Limited Company 6.75% Perpetual Subordinated Captial Security"
    },
    {
    Symbol: "PUK$A",
    CompanyName: "Prudential Public Limited Company 6.50% Perpetual Subordinated Capital Securities Exchangeable at the Issuer's Option Into Non"
    },
    {
    Symbol: "PVA",
    CompanyName: "Penn Virginia Corporation Common Stock"
    },
    {
    Symbol: "PVG",
    CompanyName: "Pretium Resources, Inc. Ordinary Shares (Canada)"
    },
    {
    Symbol: "PVH",
    CompanyName: "PVH Corp. Common Stock"
    },
    {
    Symbol: "PVTD",
    CompanyName: "PrivateBancorp, Inc. 7.125% Subordinated Debentures due 2042"
    },
    {
    Symbol: "PWE",
    CompanyName: "Penn West Petroleum Ltd"
    },
    {
    Symbol: "PWR",
    CompanyName: "Quanta Services, Inc. Common Stock"
    },
    {
    Symbol: "PX",
    CompanyName: "Praxair, Inc. Common Stock"
    },
    {
    Symbol: "PXD",
    CompanyName: "Pioneer Natural Resources Company Common Stock"
    },
    {
    Symbol: "PYB",
    CompanyName: "PPlus Trust Series GSG"
    },
    {
    Symbol: "PYN",
    CompanyName: "PIMCO New York Municipal Income Fund III Common Shares of Beneficial Interest"
    },
    {
    Symbol: "PYS",
    CompanyName: "Merrill Lynch Depositor Inc PPlus Tr Ser RRD"
    },
    {
    Symbol: "PYT",
    CompanyName: "PPlus Tr GSC"
    },
    {
    Symbol: "PZB",
    CompanyName: "Merrill Lynch Depositor, Inc. Merrill Lynch Depositor, Inc. PPLUS Class A 6.7% Callable Trust Certificates, Series LTD"
    },
    {
    Symbol: "PZC",
    CompanyName: "PIMCO California Municipal Income Fund III Common Shares of Beneficial Interest"
    },
    {
    Symbol: "PZE",
    CompanyName: "Petrobras Argentina S.A. ADS"
    },
    {
    Symbol: "PZN",
    CompanyName: "Pzena Investment Management Inc Class A Common Stock"
    },
    {
    Symbol: "Q",
    CompanyName: "Quintiles Transnational Holdings Inc. Common Stock"
    },
    {
    Symbol: "QEP",
    CompanyName: "QEP Resources, Inc. Common Stock"
    },
    {
    Symbol: "QEPM",
    CompanyName: "QEP Midstream Partners, LP Common Units representing Limited Partner Interests"
    },
    {
    Symbol: "QIHU",
    CompanyName: "Qihoo 360 Technology Co. Ltd. American Depositary Shares, every 2 of which representing three Class A Ordinary Shares"
    },
    {
    Symbol: "QSR",
    CompanyName: "Restaurant Brands International Inc. Common Shares"
    },
    {
    Symbol: "QTM",
    CompanyName: "Quantum Corporation Common Stock"
    },
    {
    Symbol: "QTS",
    CompanyName: "QTS Realty Trust, Inc. Class A Common Stock"
    },
    {
    Symbol: "QTWO",
    CompanyName: "Q2 Holdings, Inc. Common Stock"
    },
    {
    Symbol: "QUAD",
    CompanyName: "Quad Graphics, Inc Class A Common Stock"
    },
    {
    Symbol: "R",
    CompanyName: "Ryder System, Inc. Common Stock"
    },
    {
    Symbol: "RAD",
    CompanyName: "Rite Aid Corporation Common Stock"
    },
    {
    Symbol: "RAI",
    CompanyName: "Reynolds American Inc Common Stock"
    },
    {
    Symbol: "RALY",
    CompanyName: "Rally Software Development Corp. Common Stock"
    },
    {
    Symbol: "RAS",
    CompanyName: "RAIT Financial Trust New Common Shares of Beneficial Interest"
    },
    {
    Symbol: "RAS$A",
    CompanyName: "RAIT Financial Trust 7.75% Series A Cumulative Redeemable Preferred Shares of Beneficial Interest"
    },
    {
    Symbol: "RAS$B",
    CompanyName: "RAIT Financial Trust 8.375% Series B Cumulative Redeemable Preferred Shares of Beneficial Interest"
    },
    {
    Symbol: "RAS$C",
    CompanyName: "RAIT Financial Trust 8.875% Series C Cumulative Redeemable Preferred Shares of Beneficial Interest"
    },
    {
    Symbol: "RATE",
    CompanyName: "Bankrate, Inc. Common Stock"
    },
    {
    Symbol: "RAX",
    CompanyName: "Rackspace Hosting, Inc Common Stock"
    },
    {
    Symbol: "RBA",
    CompanyName: "Ritchie Bros. Auctioneers Incorporated Common Stock"
    },
    {
    Symbol: "RBC",
    CompanyName: "Regal Beloit Corporation Common Stock"
    },
    {
    Symbol: "RBS",
    CompanyName: "Royal Bank of Scotland Group Plc New (The) ADS"
    },
    {
    Symbol: "RBS$E",
    CompanyName: "RBS Capital Funding Trust V"
    },
    {
    Symbol: "RBS$F",
    CompanyName: "Royal Bank of Scotland Group Plc (The) Preferred Stock"
    },
    {
    Symbol: "RBS$G",
    CompanyName: "RBS Capital Funding Trust VII"
    },
    {
    Symbol: "RBS$H",
    CompanyName: "Royal Bank of Scotland Group Plc (The) Preferred Stock"
    },
    {
    Symbol: "RBS$I",
    CompanyName: "RBS Capital Funding Trust VI"
    },
    {
    Symbol: "RBS$L",
    CompanyName: "Royal Bank of Scotland Group Plc (The) ADR representing One Non"
    },
    {
    Symbol: "RBS$M",
    CompanyName: "Royal Bank of Scotland Group Plc (The) ADS Series M"
    },
    {
    Symbol: "RBS$N",
    CompanyName: "Royal Bank of Scotland Group Plc (The) Royal Bank of Scotland Group PLC (The) American Depositary Shares (each representing One Non"
    },
    {
    Symbol: "RBS$P",
    CompanyName: "Royal Bank of Scotland Group Plc (The) ADR representing Preferred Shares Series P"
    },
    {
    Symbol: "RBS$Q",
    CompanyName: "Royal Bank of Scotland Group Plc (The) ADR repstg Pref Shs Ser Q"
    },
    {
    Symbol: "RBS$R",
    CompanyName: "Royal Bank of Scotland Group Plc (The) ADR repstg USD Pfd Shs Ser R (United Kingdom)"
    },
    {
    Symbol: "RBS$S",
    CompanyName: "Royal Bank of Scotland Group Plc (The) Sponsored ADR Repstg Pref Ser S (United Kingdom)"
    },
    {
    Symbol: "RBS$T",
    CompanyName: "Royal Bank of Scotland Group Plc (The) Sponsored ADR Representing Pfef shs ser T (United Kingdom)"
    },
    {
    Symbol: "RCAP",
    CompanyName: "RCS CAPITAL CORPORATION Common Stock"
    },
    {
    Symbol: "RCI",
    CompanyName: "Rogers Communication, Inc. Common Stock"
    },
    {
    Symbol: "RCL",
    CompanyName: "Royal Caribbean Cruises Ltd. Common Stock"
    },
    {
    Symbol: "RCS",
    CompanyName: "PIMCO Strategic Income Fund, Inc."
    },
    {
    Symbol: "RDC",
    CompanyName: "Rowan Companies plc Class A Ordinary Shares"
    },
    {
    Symbol: "RDN",
    CompanyName: "Radian Group Inc. Common Stock"
    },
    {
    Symbol: "RDS.A",
    CompanyName: "Royal Dutch Shell PLC Royal Dutch Shell American Depositary Shares (Each representing two Class A Ordinary Shares)"
    },
    {
    Symbol: "RDS.B",
    CompanyName: "Royal Dutch Shell PLC Royal Dutch Shell PLC American Depositary Shares (Each representing two Class B Ordinary Shares)"
    },
    {
    Symbol: "RDY",
    CompanyName: "Dr. Reddy's Laboratories Ltd Common Stock"
    },
    {
    Symbol: "RE",
    CompanyName: "Everest Re Group, Ltd. Common Stock"
    },
    {
    Symbol: "REG",
    CompanyName: "Regency Centers Corporation Common Stock"
    },
    {
    Symbol: "REG$F",
    CompanyName: "Regency Centers Corporation Cumulative Red Preferred Series 6%"
    },
    {
    Symbol: "REG$G",
    CompanyName: "Regency Centers Corporation Pfd Ser 7%"
    },
    {
    Symbol: "REN",
    CompanyName: "Resolute Energy Corporation Comon Stock"
    },
    {
    Symbol: "RENN",
    CompanyName: "Renren Inc. American Depositary Shares, each representing three Class A ordinary shares"
    },
    {
    Symbol: "RES",
    CompanyName: "RPC, Inc. Common Stock"
    },
    {
    Symbol: "RESI",
    CompanyName: "Altisource Residential Corporation Common Stock"
    },
    {
    Symbol: "REV",
    CompanyName: "Revlon, Inc. New Common Stock"
    },
    {
    Symbol: "REX",
    CompanyName: "REX American Resources Corporation"
    },
    {
    Symbol: "REXR",
    CompanyName: "Rexford Industrial Realty, Inc. Common Stock"
    },
    {
    Symbol: "RF",
    CompanyName: "Regions Financial Corporation Common Stock"
    },
    {
    Symbol: "RF$A",
    CompanyName: "Regions Financial Corporation Depositary Shares Representing 1/40th Perpetual Preferred Series A"
    },
    {
    Symbol: "RF$B",
    CompanyName: "Regions Financial Corporation Depositary Shares Representing 1/40th Perpetual Preferred Series B"
    },
    {
    Symbol: "RFI",
    CompanyName: "Cohen & Steers Total Return Realty Fund, Inc. Common Stock"
    },
    {
    Symbol: "RFP",
    CompanyName: "Resolute Forest Products Inc. Common Stock"
    },
    {
    Symbol: "RFT",
    CompanyName: "RAIT Financial Trust 7.625% Senior Notes due 2024"
    },
    {
    Symbol: "RFTA",
    CompanyName: "RAIT Financial Trust 7.125% Senior Notes due 2019"
    },
    {
    Symbol: "RGA",
    CompanyName: "Reinsurance Group of America, Incorporated Common Stock"
    },
    {
    Symbol: "RGC",
    CompanyName: "Regal Entertainment Group Class A Common Stock"
    },
    {
    Symbol: "RGP",
    CompanyName: "Regency Energy Partners LP Common Units Representing Limited Partner Interests"
    },
    {
    Symbol: "RGR",
    CompanyName: "Sturm, Ruger & Company, Inc. Common Stock"
    },
    {
    Symbol: "RGS",
    CompanyName: "Regis Corporation Common Stock"
    },
    {
    Symbol: "RGT",
    CompanyName: "Royce Global Value Trust, Inc. Common Stock"
    },
    {
    Symbol: "RH",
    CompanyName: "Restoration Hardware Holdings Inc. Common Stock"
    },
    {
    Symbol: "RHI",
    CompanyName: "Robert Half International Inc. Common Stock"
    },
    {
    Symbol: "RHP",
    CompanyName: "Ryman Hospitality Properties, Inc. (REIT)"
    },
    {
    Symbol: "RHT",
    CompanyName: "Red Hat, Inc. Common Stock"
    },
    {
    Symbol: "RICE",
    CompanyName: "Rice Energy Inc. Common Stock"
    },
    {
    Symbol: "RIG",
    CompanyName: "Transocean Ltd (Switzerland) Common Stock"
    },
    {
    Symbol: "RIGP",
    CompanyName: "Transocean Partners LLC Common Units Representing Limited Liability Company Interests"
    },
    {
    Symbol: "RIO",
    CompanyName: "Rio Tinto Plc Common Stock"
    },
    {
    Symbol: "RIOM",
    CompanyName: "Rio Alto Mining Limited Common Shares (Canada)"
    },
    {
    Symbol: "RIT",
    CompanyName: "LMP Real Estate Income Fund Inc Common Stock"
    },
    {
    Symbol: "RJD",
    CompanyName: "Raymond James Financial, Inc. 6.90% Senior Notes Due 2042"
    },
    {
    Symbol: "RJF",
    CompanyName: "Raymond James Financial, Inc. Common Stock"
    },
    {
    Symbol: "RKT",
    CompanyName: "Rock"
    },
    {
    Symbol: "RKUS",
    CompanyName: "Ruckus Wireless, Inc. Common Stock"
    },
    {
    Symbol: "RL",
    CompanyName: "Ralph Lauren Corporation Common Stock"
    },
    {
    Symbol: "RLD",
    CompanyName: "RealD Inc Common Stock"
    },
    {
    Symbol: "RLGY",
    CompanyName: "Realogy Holdings Corp. Common Stock"
    },
    {
    Symbol: "RLH",
    CompanyName: "Red Lions Hotels Corporation Common Stock"
    },
    {
    Symbol: "RLH$A",
    CompanyName: "Red Lion Hotels Capital Trust Red Lion Hotels Capital Trust"
    },
    {
    Symbol: "RLI",
    CompanyName: "RLI Corp. Common Stock"
    },
    {
    Symbol: "RLJ",
    CompanyName: "RLJ Lodging Trust Common Shares of Beneficial Interest $0.01 par value"
    },
    {
    Symbol: "RM",
    CompanyName: "Regional Management Corp. Common Stock"
    },
    {
    Symbol: "RMAX",
    CompanyName: "RE/MAX Holdings, Inc. Class A Common Stock"
    },
    {
    Symbol: "RMD",
    CompanyName: "ResMed Inc. Common Stock"
    },
    {
    Symbol: "RMP",
    CompanyName: "Rice Midstream Partners LP Common Units representing limited partner interests"
    },
    {
    Symbol: "RMT",
    CompanyName: "Royce Micro"
    },
    {
    Symbol: "RNDY",
    CompanyName: "Roundy's, Inc. Common Stock"
    },
    {
    Symbol: "RNE",
    CompanyName: "Morgan Stanley Eastern Europe Fund, Inc. Common Stock"
    },
    {
    Symbol: "RNF",
    CompanyName: "Rentech Nitrogen Partners, L.P. Common Units representing limited partner interests"
    },
    {
    Symbol: "RNG",
    CompanyName: "Ringcentral, Inc. Class A Common Stock"
    },
    {
    Symbol: "RNO",
    CompanyName: "Rhino Resource Partners LP Common Units representing limited partnership interests"
    },
    {
    Symbol: "RNP",
    CompanyName: "Cohen & Steers Reit and Preferred Income Fund Inc Common Shares"
    },
    {
    Symbol: "RNR",
    CompanyName: "RenaissanceRe Holdings Ltd. Common Stock"
    },
    {
    Symbol: "RNR$C",
    CompanyName: "RenaissanceRe Holdings Ltd. 6.08% Series C Preference Shares"
    },
    {
    Symbol: "RNR$E",
    CompanyName: "RenaissanceRe Holdings Ltd. 5.375% Series E Preference Shares"
    },
    {
    Symbol: "ROC",
    CompanyName: "Rockwood Holdings, Inc. Common Stock"
    },
    {
    Symbol: "ROG",
    CompanyName: "Rogers Corporation Common Stock"
    },
    {
    Symbol: "ROK",
    CompanyName: "Rockwell Automation, Inc. Common Stock"
    },
    {
    Symbol: "ROL",
    CompanyName: "Rollins, Inc. Common Stock"
    },
    {
    Symbol: "ROP",
    CompanyName: "Roper Industries, Inc. Common Stock"
    },
    {
    Symbol: "ROYT",
    CompanyName: "Pacific Coast Oil Trust Units of Beneficial Interest"
    },
    {
    Symbol: "RPAI",
    CompanyName: "Retail Properties of America, Inc. Class A Common Stock"
    },
    {
    Symbol: "RPAI$A",
    CompanyName: "Retail Properties of America, Inc. Pfd Ser A %"
    },
    {
    Symbol: "RPM",
    CompanyName: "RPM International Inc. Common Stock"
    },
    {
    Symbol: "RPT",
    CompanyName: "Ramco"
    },
    {
    Symbol: "RPT$D",
    CompanyName: "Ramco"
    },
    {
    Symbol: "RQI",
    CompanyName: "Cohen & Steers Quality Income Realty Fund Inc Common Shares"
    },
    {
    Symbol: "RRC",
    CompanyName: "Range Resources Corporation Common Stock"
    },
    {
    Symbol: "RRMS",
    CompanyName: "Rose Rock Midstream, L.P. Common Units Representing Limited Partner Interests"
    },
    {
    Symbol: "RRTS",
    CompanyName: "Roadrunner Transportation Systems, Inc Common Stock"
    },
    {
    Symbol: "RS",
    CompanyName: "Reliance Steel & Aluminum Co. Common Stock"
    },
    {
    Symbol: "RSE",
    CompanyName: "Rouse Properties, Inc. Common Stock"
    },
    {
    Symbol: "RSG",
    CompanyName: "Republic Services, Inc. Common Stock"
    },
    {
    Symbol: "RSH",
    CompanyName: "Radioshack Corporation Common Stock"
    },
    {
    Symbol: "RSO",
    CompanyName: "Resource Capital Corp. Resource Capital Corp. Common Stock"
    },
    {
    Symbol: "RSO$A",
    CompanyName: "Resource Capital Corp. 8.50% Series A Cumulative Redeemable Preferred Stock"
    },
    {
    Symbol: "RSO$B",
    CompanyName: "Resource Capital Corp. Pfd Ser B"
    },
    {
    Symbol: "RSO$C",
    CompanyName: "Resource Capital Corp. Preferred Series C"
    },
    {
    Symbol: "RSPP",
    CompanyName: "RSP Permian, Inc. Common Stock"
    },
    {
    Symbol: "RST",
    CompanyName: "Rosetta Stone Rosetta Stone, Inc."
    },
    {
    Symbol: "RT",
    CompanyName: "Ruby Tuesday, Inc. Common Stock"
    },
    {
    Symbol: "RTEC",
    CompanyName: "Rudolph Technologies, Inc. Common Stock"
    },
    {
    Symbol: "RTI",
    CompanyName: "RTI International Metals, Inc. Common Stock"
    },
    {
    Symbol: "RTN",
    CompanyName: "Raytheon Company Common Stock"
    },
    {
    Symbol: "RUBI",
    CompanyName: "The Rubicon Project, Inc. Common Stock"
    },
    {
    Symbol: "RUK",
    CompanyName: "Reed Elsevier NV PLC New ADS"
    },
    {
    Symbol: "RVT",
    CompanyName: "Royce Value Trust, Inc. Common Stock"
    },
    {
    Symbol: "RWT",
    CompanyName: "Redwood Trust, Inc. Common Stock"
    },
    {
    Symbol: "RXN",
    CompanyName: "Rexnord Corporation Common Stock"
    },
    {
    Symbol: "RY",
    CompanyName: "Royal Bank Of Canada Common Stock"
    },
    {
    Symbol: "RYAM",
    CompanyName: "Rayonier Advanced Materials Inc. Common Stock"
    },
    {
    Symbol: "RYI",
    CompanyName: "Ryerson Holding Corporation Common Stock"
    },
    {
    Symbol: "RYL",
    CompanyName: "Ryland Group, Inc. (The) Common Stock"
    },
    {
    Symbol: "RYN",
    CompanyName: "Rayonier Inc. REIT Common Stock"
    },
    {
    Symbol: "RZA",
    CompanyName: "Reinsurance Group of America, Incorporated 6.20% Fixed"
    },
    {
    Symbol: "S",
    CompanyName: "Sprint Corporation Common Stock"
    },
    {
    Symbol: "SA",
    CompanyName: "Seabridge Gold, Inc. Ordinary Shares (Canada)"
    },
    {
    Symbol: "SAH",
    CompanyName: "Sonic Automotive, Inc. Common Stock"
    },
    {
    Symbol: "SAIC",
    CompanyName: "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION Common Stock"
    },
    {
    Symbol: "SALT",
    CompanyName: "Scorpio Bulkers Inc. Common Stock"
    },
    {
    Symbol: "SAM",
    CompanyName: "Boston Beer Company, Inc. (The) Common Stock"
    },
    {
    Symbol: "SAN",
    CompanyName: "Banco Santander, S.A. Sponsored ADR (Spain)"
    },
    {
    Symbol: "SAN$A",
    CompanyName: "Banco Santander, S.A. 6.80% Non"
    },
    {
    Symbol: "SAN$B",
    CompanyName: "Santander Finance Preferred SA Unipersonal Floating Rate Non"
    },
    {
    Symbol: "SAN$C",
    CompanyName: "Banco Santander, S.A. 6.50% Non"
    },
    {
    Symbol: "SAN$I",
    CompanyName: "Banco Santander Central Hispano, S.A. Santander Finance Preferred S.A. Unipersonal 6.41% Non"
    },
    {
    Symbol: "SAP",
    CompanyName: "SAP SE ADS"
    },
    {
    Symbol: "SAQ",
    CompanyName: "Saratoga Investment Corp 7.50% Notes due 2020"
    },
    {
    Symbol: "SAR",
    CompanyName: "Saratoga Investment Corp New"
    },
    {
    Symbol: "SB",
    CompanyName: "Safe Bulkers, Inc Common Stock ($0.001 par value)"
    },
    {
    Symbol: "SB$B",
    CompanyName: "Safe Bulkers, Inc 8.00% Series B Cumulative Redeemable Perpetual Preferred Shares"
    },
    {
    Symbol: "SB$C",
    CompanyName: "Safe Bulkers, Inc Cumulative Redeemable Perpetual Preferred Series C (Marshall Islands)"
    },
    {
    Symbol: "SB$D",
    CompanyName: "Safe Bulkers, Inc Perpetual Preferred Series D (Marshall Islands)"
    },
    {
    Symbol: "SBGL",
    CompanyName: "Sibanye Gold Limited American Depositary Shares (Each representing four ordinary shares)"
    },
    {
    Symbol: "SBH",
    CompanyName: "Sally Beauty Holdings, Inc. (Name to be changed from Sally Holdings, Inc.) Common Stock"
    },
    {
    Symbol: "SBNA",
    CompanyName: "Scorpio Tankers Inc. 6.75% Senior Notes due 2020"
    },
    {
    Symbol: "SBNB",
    CompanyName: "Scorpio Tankers Inc. 7.50% Senior Notes Due 2017"
    },
    {
    Symbol: "SBR",
    CompanyName: "Sabine Royalty Trust Common Stock"
    },
    {
    Symbol: "SBS",
    CompanyName: "Companhia de saneamento Basico Do Estado De Sao Paulo"
    },
    {
    Symbol: "SBW",
    CompanyName: "Western Asset Worldwide Income Fund Inc. Common Stock"
    },
    {
    Symbol: "SBY",
    CompanyName: "Silver Bay Realty Trust Corp. Common Stock"
    },
    {
    Symbol: "SC",
    CompanyName: "Santander Consumer USA Holdings Inc. Common Stock"
    },
    {
    Symbol: "SCCO",
    CompanyName: "Southern Copper Corporation Common Stock"
    },
    {
    Symbol: "SCD",
    CompanyName: "LMP Capital and Income Fund Inc. Common Stock"
    },
    {
    Symbol: "SCE$F",
    CompanyName: "Southern California Edison Trust I Trust Preferred Securities"
    },
    {
    Symbol: "SCE$G",
    CompanyName: "SCE Trust II Trust Preferred Securities"
    },
    {
    Symbol: "SCE$H",
    CompanyName: "SCE Trust III Fixed/Floating Rate Trust Preference Securities"
    },
    {
    Symbol: "SCG",
    CompanyName: "SCANA Corporation Common Stock"
    },
    {
    Symbol: "SCHW",
    CompanyName: "Charles Schwab Corporation (The) Common Stock"
    },
    {
    Symbol: "SCHW$B",
    CompanyName: "Charles Schwab Corporation Depositary Shares Representing 1/40th Int Sh Non Cumulative Preferred Stock Series B"
    },
    {
    Symbol: "SCI",
    CompanyName: "Service Corporation International Common Stock"
    },
    {
    Symbol: "SCL",
    CompanyName: "Stepan Company Common Stock"
    },
    {
    Symbol: "SCM",
    CompanyName: "Stellus Capital Investment Corporation Common Stock"
    },
    {
    Symbol: "SCQ",
    CompanyName: "Stellus Capital Investment Corporation 6.50% Notes due 2019"
    },
    {
    Symbol: "SCS",
    CompanyName: "Steelcase Inc. Common Stock"
    },
    {
    Symbol: "SCU",
    CompanyName: "Scana Corporation SCANA CORPORATION 2009 Series A 7.70% Enhanced Junior Subordinated Notes"
    },
    {
    Symbol: "SCX",
    CompanyName: "L.S. Starrett Company (The) Common Stock"
    },
    {
    Symbol: "SD",
    CompanyName: "Sandridge Energy Inc. Common Stock"
    },
    {
    Symbol: "SDLP",
    CompanyName: "Seadrill Partners LLC Common Units Representing Limited Liability Company Interests"
    },
    {
    Symbol: "SDR",
    CompanyName: "SandRidge Mississippian Trust II Common Units representing Beneficial Interests"
    },
    {
    Symbol: "SDRL",
    CompanyName: "Seadrill Limited Ordinary Shares (Bermuda)"
    },
    {
    Symbol: "SDT",
    CompanyName: "SandRidge Mississippian Trust I Common Units of Beneficial Interest"
    },
    {
    Symbol: "SE",
    CompanyName: "Spectra Energy Corp Common Stock"
    },
    {
    Symbol: "SEAS",
    CompanyName: "SeaWorld Entertainment, Inc. Common Stock"
    },
    {
    Symbol: "SEE",
    CompanyName: "Sealed Air Corporation Common Stock"
    },
    {
    Symbol: "SEM",
    CompanyName: "Select Medical Holdings Corporation Common Stock"
    },
    {
    Symbol: "SEMG",
    CompanyName: "Semgroup Corporation Class A Common Stock"
    },
    {
    Symbol: "SEP",
    CompanyName: "Spectra Energy Partners, LP Common Units representing Limited Partner Interests"
    },
    {
    Symbol: "SERV",
    CompanyName: "ServiceMaster Global Holdings, Inc. Common Stock"
    },
    {
    Symbol: "SF",
    CompanyName: "Stifel Financial Corporation Common Stock"
    },
    {
    Symbol: "SFB",
    CompanyName: "Stifel Financial Corp. 6.70% Senior Note due 2022"
    },
    {
    Symbol: "SFE",
    CompanyName: "Safeguard Scientifics, Inc. New Common Stock"
    },
    {
    Symbol: "SFG",
    CompanyName: "StanCorp Financial Group, Inc. Common Stock"
    },
    {
    Symbol: "SFL",
    CompanyName: "Ship Finance International Limited"
    },
    {
    Symbol: "SFN",
    CompanyName: "Stifel Financial Corporation 5.375% Senior Notes due December 2022"
    },
    {
    Symbol: "SFS",
    CompanyName: "Smart & Final Stores, Inc. Common Stock"
    },
    {
    Symbol: "SFUN",
    CompanyName: "SouFun Holdings Limited American Depositary Shares (Each representing Four Class A Ordinary Shares, HK$1.00 par value)"
    },
    {
    Symbol: "SFY",
    CompanyName: "Swift Energy Company (Holding Company) Common Stock"
    },
    {
    Symbol: "SGF",
    CompanyName: "Aberdeen Singapore Fund, Inc. Common Stock"
    },
    {
    Symbol: "SGL",
    CompanyName: "Strategic Global Income Fund, Inc. Common Stock"
    },
    {
    Symbol: "SGM",
    CompanyName: "Stonegate Mortgage Corporation Common Stock"
    },
    {
    Symbol: "SGU",
    CompanyName: "Star Gas Partners, L.P. Common Stock"
    },
    {
    Symbol: "SGY",
    CompanyName: "Stone Energy Corporation Common Stock"
    },
    {
    Symbol: "SGZA",
    CompanyName: "Selective Insurance Group, Inc. 5.875% Senior Notes due 2043"
    },
    {
    Symbol: "SHG",
    CompanyName: "Shinhan Financial Group Co Ltd American Depositary Shares"
    },
    {
    Symbol: "SHI",
    CompanyName: "SINOPEC Shangai Petrochemical Company, Ltd. Common Stock"
    },
    {
    Symbol: "SHLX",
    CompanyName: "Shell Midstream Partners, L.P. Common Units representing Limited Partner Interests"
    },
    {
    Symbol: "SHO",
    CompanyName: "Sunstone Hotel Investors, Inc. Sunstone Hotel Investors, Inc. Common Shares"
    },
    {
    Symbol: "SHO$D",
    CompanyName: "Sunstone Hotel Investors, Inc. 8.0% Series D Cumulative Redeemable Preferred Stock"
    },
    {
    Symbol: "SHW",
    CompanyName: "Sherwin"
    },
    {
    Symbol: "SID",
    CompanyName: "Companhia Siderurgica Nacional S.A. Common Stock"
    },
    {
    Symbol: "SIG",
    CompanyName: "Signet Jewelers Limited Common Shares"
    },
    {
    Symbol: "SIR",
    CompanyName: "Select Income REIT Common Shares of Beneficial Interest"
    },
    {
    Symbol: "SIX",
    CompanyName: "Six Flags Entertainment Corporation New Common Stock"
    },
    {
    Symbol: "SJI",
    CompanyName: "South Jersey Industries, Inc. Common Stock"
    },
    {
    Symbol: "SJM",
    CompanyName: "J.M. Smucker Company (The) New Common Stock"
    },
    {
    Symbol: "SJR",
    CompanyName: "Shaw Communications Inc. Common Stock"
    },
    {
    Symbol: "SJT",
    CompanyName: "San Juan Basin Royalty Trust Common Stock"
    },
    {
    Symbol: "SJW",
    CompanyName: "SJW Corporation Common Stock"
    },
    {
    Symbol: "SKH",
    CompanyName: "Skilled Healthcare Group, Inc. Common Stock"
    },
    {
    Symbol: "SKM",
    CompanyName: "SK Telecom Co., Ltd. Common Stock"
    },
    {
    Symbol: "SKT",
    CompanyName: "Tanger Factory Outlet Centers, Inc. Common Stock"
    },
    {
    Symbol: "SKX",
    CompanyName: "Skechers U.S.A., Inc. Common Stock"
    },
    {
    Symbol: "SLB",
    CompanyName: "Schlumberger N.V. Common Stock"
    },
    {
    Symbol: "SLCA",
    CompanyName: "U.S. Silica Holdings, Inc. Common Stock"
    },
    {
    Symbol: "SLF",
    CompanyName: "Sun Life Financial Inc. Common Stock"
    },
    {
    Symbol: "SLG",
    CompanyName: "SL Green Realty Corporation Common Stock"
    },
    {
    Symbol: "SLG$I",
    CompanyName: "SL Green Realty Corporation Preferred Series I"
    },
    {
    Symbol: "SLH",
    CompanyName: "Solera Holdings, Inc. Solera Holdings, Inc. Common Stock"
    },
    {
    Symbol: "SLRA",
    CompanyName: "Solar Capital Ltd. 6.75% Senior Notes due 2042"
    },
    {
    Symbol: "SLTB",
    CompanyName: "Scorpio Bulkers Inc. 7.50% Senior Notes due 2019"
    },
    {
    Symbol: "SLW",
    CompanyName: "Silver Wheaton Corp Common Shares (Canada)"
    },
    {
    Symbol: "SM",
    CompanyName: "SM Energy Company Common Stock"
    },
    {
    Symbol: "SMFG",
    CompanyName: "Sumitomo Mitsui Financial Group Inc Unsponsored American Depositary Shares (Japan)"
    },
    {
    Symbol: "SMG",
    CompanyName: "Scotts Miracle"
    },
    {
    Symbol: "SMI",
    CompanyName: "Semiconductor Manufacturing International Corporation ADR"
    },
    {
    Symbol: "SMLP",
    CompanyName: "Summit Midstream Partners, LP Common Units Representing Limited Partner Interests"
    },
    {
    Symbol: "SMM",
    CompanyName: "Salient Midstream Common Shares of Beneficial Interest"
    },
    {
    Symbol: "SMP",
    CompanyName: "Standard Motor Products, Inc. Common Stock"
    },
    {
    Symbol: "SN",
    CompanyName: "Sanchez Energy Corporation Common Stock"
    },
    {
    Symbol: "SNA",
    CompanyName: "Snap"
    },
    {
    Symbol: "SNE",
    CompanyName: "Sony Corporation Common Stock"
    },
    {
    Symbol: "SNH",
    CompanyName: "Senior Housing Properties Trust Common Stock"
    },
    {
    Symbol: "SNHN",
    CompanyName: "Senior Housing Properties Trust 5.625% Senior Notes due 2042"
    },
    {
    Symbol: "SNI",
    CompanyName: "Scripps Networks Interactive, Inc Common Class A"
    },
    {
    Symbol: "SNN",
    CompanyName: "Smith & Nephew SNATS, Inc. Common Stock"
    },
    {
    Symbol: "SNOW",
    CompanyName: "Intrawest Resorts Holdings, Inc. Common Stock"
    },
    {
    Symbol: "SNP",
    CompanyName: "China Petroleum & Chemical Corporation Common Stock"
    },
    {
    Symbol: "SNR",
    CompanyName: "New Senior Investment Group Inc. Common Stock"
    },
    {
    Symbol: "SNV",
    CompanyName: "Synovus Financial Corp. Common Stock"
    },
    {
    Symbol: "SNV$C",
    CompanyName: "Synovus Financial Corp. Perp Pfd Ser C Fxd To Fltg"
    },
    {
    Symbol: "SNX",
    CompanyName: "Synnex Corporation Common Stock"
    },
    {
    Symbol: "SNY",
    CompanyName: "Sanofi American Depositary Shares (Each repstg one"
    },
    {
    Symbol: "SO",
    CompanyName: "Southern Company (The) Common Stock"
    },
    {
    Symbol: "SOL",
    CompanyName: "Renesola Ltd. Common Shares of Beneficial Interest"
    },
    {
    Symbol: "SON",
    CompanyName: "Sonoco Products Company Common Stock"
    },
    {
    Symbol: "SOR",
    CompanyName: "Source Capital, Inc. Common Stock"
    },
    {
    Symbol: "SOV$C",
    CompanyName: "Santander Holdings USA, Inc. Dep Shs repstg 1/1000 Perp Pfd Ser C"
    },
    {
    Symbol: "SPA",
    CompanyName: "Sparton Corporation Common Stock"
    },
    {
    Symbol: "SPB",
    CompanyName: "Spectrum Brands Holdings, Inc. Common Stock"
    },
    {
    Symbol: "SPE",
    CompanyName: "Special Opportunities Fund, Inc Common Stock"
    },
    {
    Symbol: "SPF",
    CompanyName: "Standard Pacific Corp Common Stock"
    },
    {
    Symbol: "SPG",
    CompanyName: "Simon Property Group, Inc. Common Stock"
    },
    {
    Symbol: "SPG$J",
    CompanyName: "Simon Property Group, Inc. Simon Property Group 8 3/8% Series J Cumulative Redeemable Preferred Stock"
    },
    {
    Symbol: "SPH",
    CompanyName: "Suburban Propane Partners, L.P. Common Stock"
    },
    {
    Symbol: "SPLP",
    CompanyName: "Steel Partners Holdings LP LTD PARTNERSHIP UNIT"
    },
    {
    Symbol: "SPN",
    CompanyName: "Superior Energy Services, Inc. Common Stock"
    },
    {
    Symbol: "SPR",
    CompanyName: "Spirit Aerosystems Holdings, Inc. Common Stock"
    },
    {
    Symbol: "SPW",
    CompanyName: "SPX Corporation Common Stock"
    },
    {
    Symbol: "SPXX",
    CompanyName: "Nuveen S&P 500 Dynamic Overwrite Fund"
    },
    {
    Symbol: "SQM",
    CompanyName: "Sociedad Quimica y Minera S.A. Common Stock"
    },
    {
    Symbol: "SQNS",
    CompanyName: "Sequans Communications S.A. American Depositary Shares, each representing one Ordinary Share"
    },
    {
    Symbol: "SR",
    CompanyName: "Standard Register Company (The) Common Stock"
    },
    {
    Symbol: "SRC",
    CompanyName: "Spirit Realty Capital, Inc. Common Stock"
    },
    {
    Symbol: "SRE",
    CompanyName: "Sempra Energy Common Stock"
    },
    {
    Symbol: "SRF",
    CompanyName: "The Cushing Royalty & Income Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "SRI",
    CompanyName: "Stoneridge, Inc. Common Stock"
    },
    {
    Symbol: "SRLP",
    CompanyName: "Sprague Resources LP Common Units representing Limited Partner Interests"
    },
    {
    Symbol: "SRT",
    CompanyName: "StarTek, Inc. Common Stock"
    },
    {
    Symbol: "SRV",
    CompanyName: "The Cushing MLP Total Return Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "SSD",
    CompanyName: "Simpson Manufacturing Company, Inc. Common Stock"
    },
    {
    Symbol: "SSE",
    CompanyName: "Seventy Seven Energy Inc. Common Stock"
    },
    {
    Symbol: "SSI",
    CompanyName: "Stage Stores, Inc. Common Stock"
    },
    {
    Symbol: "SSL",
    CompanyName: "Sasol Ltd. American Depositary Shares"
    },
    {
    Symbol: "SSLT",
    CompanyName: "Sesa Sterlite Limited American Depositary Shares (Each representing four equity shares)"
    },
    {
    Symbol: "SSNI",
    CompanyName: "Silver Spring Networks, Inc. Common Stock"
    },
    {
    Symbol: "SSP",
    CompanyName: "E.W. Scripps Company (The) Common Stock"
    },
    {
    Symbol: "SSS",
    CompanyName: "Sovran Self Storage, Inc. Common Stock"
    },
    {
    Symbol: "SSTK",
    CompanyName: "Shutterstock, Inc. Common Stock"
    },
    {
    Symbol: "SSW",
    CompanyName: "Seaspan Corporation Seaspan Corporation Common Shares"
    },
    {
    Symbol: "SSW$C",
    CompanyName: "Seaspan Corporation 9.50% Series C Cumulative Redeemable Perpetual Preferred Shares"
    },
    {
    Symbol: "SSW$D",
    CompanyName: "Seaspan Corporation Cumulative Redeemable Perpetual Preferred Series D (Marshall Islands)"
    },
    {
    Symbol: "SSW$E",
    CompanyName: "Seaspan Corporation Cumulative Redeemable Perpetual Preferred Series E (Marshall Islands)"
    },
    {
    Symbol: "SSWN",
    CompanyName: "Seaspan Corporation 6.375% Notes due 2019"
    },
    {
    Symbol: "ST",
    CompanyName: "Sensata Technologies Holding N.V. Ordinary Shares"
    },
    {
    Symbol: "STAG",
    CompanyName: "Stag Industrial, Inc. Common Stock"
    },
    {
    Symbol: "STAG$A",
    CompanyName: "Stag Industrial, Inc. Preferred Series A"
    },
    {
    Symbol: "STAG$B",
    CompanyName: "Stag Industrial, Inc. Cum Pfd Ser B"
    },
    {
    Symbol: "STAR",
    CompanyName: "iStar Financial Inc. Common Stock"
    },
    {
    Symbol: "STAR$D",
    CompanyName: "iStar Financial Inc. Preferred Stock"
    },
    {
    Symbol: "STAR$E",
    CompanyName: "iStar Financial Inc. 7.875% Preferred Ser E"
    },
    {
    Symbol: "STAR$F",
    CompanyName: "iStar Financial Inc. Series F Preferred Stock"
    },
    {
    Symbol: "STAR$G",
    CompanyName: "iStar Financial Inc. Preferred Stock Series G"
    },
    {
    Symbol: "STAR$I",
    CompanyName: "iStar Financial Inc. Preferred Series I"
    },
    {
    Symbol: "STAY",
    CompanyName: "Extended Stay America, Inc. Common Stock"
    },
    {
    Symbol: "STC",
    CompanyName: "Stewart Information Services Corporation Common Stock"
    },
    {
    Symbol: "STE",
    CompanyName: "STERIS Corporation Common Stock"
    },
    {
    Symbol: "STI",
    CompanyName: "SunTrust Banks, Inc. Common Stock"
    },
    {
    Symbol: "STI$A",
    CompanyName: "SunTrust Banks, Inc. Dep Shs repstg 1/4000 Perpetual Pfd Stk Ser A"
    },
    {
    Symbol: "STI$E",
    CompanyName: "SunTrust Banks, Inc. Depositary Shares Representing Perpetual Preferred Series E"
    },
    {
    Symbol: "STI.A",
    CompanyName: "SunTrust Banks, Inc. Class A Warrant (Expiring December 31, 2018)"
    },
    {
    Symbol: "STI.B",
    CompanyName: "SunTrust Banks, Inc. Class B Warrant (Expiring November 14, 2018)"
    },
    {
    Symbol: "STJ",
    CompanyName: "St. Jude Medical, Inc. Common Stock"
    },
    {
    Symbol: "STK",
    CompanyName: "Columbia Seligman Premium Technology Growth Fund Inc"
    },
    {
    Symbol: "STL",
    CompanyName: "Sterling Bancorp"
    },
    {
    Symbol: "STM",
    CompanyName: "STMicroelectronics N.V. Common Stock"
    },
    {
    Symbol: "STN",
    CompanyName: "Stantec Inc Common Stock"
    },
    {
    Symbol: "STNG",
    CompanyName: "Scorpio Tankers Inc. Common Shares"
    },
    {
    Symbol: "STO",
    CompanyName: "Statoil ASA"
    },
    {
    Symbol: "STON",
    CompanyName: "StoneMor Partners L.P. Common Unit Rep Limited Partnership Interests"
    },
    {
    Symbol: "STOR",
    CompanyName: "STORE Capital Corporation Common Stock"
    },
    {
    Symbol: "STR",
    CompanyName: "Questar Corporation Common Stock"
    },
    {
    Symbol: "STRI",
    CompanyName: "STR Holdings, Inc Common Stock"
    },
    {
    Symbol: "STT",
    CompanyName: "State Street Corporation Common Stock"
    },
    {
    Symbol: "STT$C",
    CompanyName: "State Street Corporation Dep Shs Representing 1/4000 Ownership Int In Sh Non Cum (Perpertual Pfd Stk Ser C)"
    },
    {
    Symbol: "STT$D",
    CompanyName: "State Street Corporation Depositary Shares representing 1/4000th Perpetual Preferred Series D"
    },
    {
    Symbol: "STT$E",
    CompanyName: "State Street Corporation Depository Shares, each representing a 1/4,000th ownership interest in a share of Non"
    },
    {
    Symbol: "STV",
    CompanyName: "China Digital TV Holding Co., Ltd. American Depositary Shares"
    },
    {
    Symbol: "STWD",
    CompanyName: "STARWOOD PROPERTY TRUST, INC. Starwood Property Trust Inc."
    },
    {
    Symbol: "STZ",
    CompanyName: "Constellation Brands, Inc. Common Stock"
    },
    {
    Symbol: "STZ.B",
    CompanyName: "Constellation Brands, Inc. Common Stock"
    },
    {
    Symbol: "SU",
    CompanyName: "Suncor Energy Inc. Common Stock"
    },
    {
    Symbol: "SUI",
    CompanyName: "Sun Communities, Inc. Common Stock"
    },
    {
    Symbol: "SUI$A",
    CompanyName: "Sun Communities, Inc. Preferred Series A"
    },
    {
    Symbol: "SUN",
    CompanyName: "Sunoco LP Common Units representing limited partner interests"
    },
    {
    Symbol: "SUNE",
    CompanyName: "SunEdison, Inc. Common Stock"
    },
    {
    Symbol: "SUP",
    CompanyName: "Superior Industries International, Inc. Common Stock"
    },
    {
    Symbol: "SVM",
    CompanyName: "Silvercorp Metals Inc Ordinary Shares (Canada)"
    },
    {
    Symbol: "SVU",
    CompanyName: "SuperValu Inc. Common Stock"
    },
    {
    Symbol: "SWAY",
    CompanyName: "Starwood Waypoint Residential Trust Common Stock"
    },
    {
    Symbol: "SWC",
    CompanyName: "Stillwater Mining Company Common Stock ($0.01 Par Value)"
    },
    {
    Symbol: "SWFT",
    CompanyName: "Swift Transportation Company Class A Common Stock"
    },
    {
    Symbol: "SWH",
    CompanyName: "Stanley Black & Decker, Inc. Corp Unit 2013"
    },
    {
    Symbol: "SWI",
    CompanyName: "Solarwinds, Inc. Common Stock"
    },
    {
    Symbol: "SWJ",
    CompanyName: "Stanley Black & Decker, Inc. 5.75% Junior Subordinated Debenture due 2052"
    },
    {
    Symbol: "SWK",
    CompanyName: "Stanley Black & Decker, Inc. Common Stock"
    },
    {
    Symbol: "SWM",
    CompanyName: "Schweitzer"
    },
    {
    Symbol: "SWN",
    CompanyName: "Southwestern Energy Company Common Stock"
    },
    {
    Symbol: "SWU",
    CompanyName: "Stanley Black & Decker, Inc Corporate Units"
    },
    {
    Symbol: "SWX",
    CompanyName: "Southwest Gas Corporation Common Stock"
    },
    {
    Symbol: "SWY",
    CompanyName: "Safeway Inc. Common Stock"
    },
    {
    Symbol: "SWZ",
    CompanyName: "Swiss Helvetia Fund, Inc. (The) Common Stock"
    },
    {
    Symbol: "SXC",
    CompanyName: "SunCoke Energy, Inc. Common Stock"
    },
    {
    Symbol: "SXCP",
    CompanyName: "SunCoke Energy Partners, L.P. Common Units Representing Limited partner Interests"
    },
    {
    Symbol: "SXE",
    CompanyName: "Southcross Energy Partners, L.P. Common Units representing limited partner interest in the Partnership"
    },
    {
    Symbol: "SXI",
    CompanyName: "Standex International Corporation Common Stock"
    },
    {
    Symbol: "SXL",
    CompanyName: "Sunoco Logistics Partners LP Common Units representing limited partner interests"
    },
    {
    Symbol: "SXT",
    CompanyName: "Sensient Technologies Corporation Common Stock"
    },
    {
    Symbol: "SYA",
    CompanyName: "Symetra Financial Corporation Common Stock $0.01 par value"
    },
    {
    Symbol: "SYF",
    CompanyName: "Synchrony Financial Common Stock"
    },
    {
    Symbol: "SYK",
    CompanyName: "Stryker Corporation Common Stock"
    },
    {
    Symbol: "SYT",
    CompanyName: "Syngenta AG Common Stock"
    },
    {
    Symbol: "SYX",
    CompanyName: "Systemax Inc. Common Stock"
    },
    {
    Symbol: "SYY",
    CompanyName: "Sysco Corporation Common Stock"
    },
    {
    Symbol: "SZC",
    CompanyName: "Cushing Renaissance Fund (The) Common Shares of Beneficial Interest"
    },
    {
    Symbol: "T",
    CompanyName: "AT&T Inc."
    },
    {
    Symbol: "TA",
    CompanyName: "TravelCenters of America LLC Common Stock"
    },
    {
    Symbol: "TAC",
    CompanyName: "TransAlta Corporation Ordinary Shares"
    },
    {
    Symbol: "TAHO",
    CompanyName: "Tahoe Resources, Inc. Ordinary Shares (Canada)"
    },
    {
    Symbol: "TAI",
    CompanyName: "Transamerica Income Shares, Inc. Common Stock"
    },
    {
    Symbol: "TAL",
    CompanyName: "TAL International Group, Inc. Common Stock"
    },
    {
    Symbol: "TANN",
    CompanyName: "TravelCenters of America LLC 8.25% Senior Notes due 2028"
    },
    {
    Symbol: "TANO",
    CompanyName: "TravelCenters of America LLC 8.00% Senior Notes due 2029"
    },
    {
    Symbol: "TAOM",
    CompanyName: "Taomee Holdings Limited American Depositary Shares (each representing 20 ordinary shares)"
    },
    {
    Symbol: "TAP",
    CompanyName: "Molson Coors Brewing Company Class B Common Stock"
    },
    {
    Symbol: "TAP.A",
    CompanyName: "Molson Coors Brewing Company Molson Coors Brewing Company Class A Common Stock"
    },
    {
    Symbol: "TARO",
    CompanyName: "Taro Pharmaceutical Industries Ltd. Ordinary Shares"
    },
    {
    Symbol: "TBI",
    CompanyName: "TrueBlue, Inc. Common Stock"
    },
    {
    Symbol: "TC",
    CompanyName: "Thompson Creek Metals Company Inc. Ordinary Shares (Canada)"
    },
    {
    Symbol: "TCAP",
    CompanyName: "Triangle Capital Corporation Common Stock"
    },
    {
    Symbol: "TCB",
    CompanyName: "TCF Financial Corporation Common Stock"
    },
    {
    Symbol: "TCB$B",
    CompanyName: "TCF Financial Corporation Del Dep Shs Repstg 1/1000 Pfd Ser A"
    },
    {
    Symbol: "TCB$C",
    CompanyName: "TCF Financial Corporation Perp Pfd Ser B"
    },
    {
    Symbol: "TCB.W",
    CompanyName: "TCF Financial Corporation TCF Financial Corporation Warrants"
    },
    {
    Symbol: "TCC",
    CompanyName: "Triangle Capital Corporation 7.00% Senior Notes due 2019"
    },
    {
    Symbol: "TCCA",
    CompanyName: "Triangle Capital Corporation 6.375% Senior Notes due 2022"
    },
    {
    Symbol: "TCI",
    CompanyName: "Transcontinental Realty Investors, Inc. Common Stock"
    },
    {
    Symbol: "TCK",
    CompanyName: "Teck Resources Ltd Ordinary Shares"
    },
    {
    Symbol: "TCO",
    CompanyName: "Taubman Centers, Inc. Common Stock"
    },
    {
    Symbol: "TCO$J",
    CompanyName: "Taubman Centers, Inc. Preferred Shares Series J"
    },
    {
    Symbol: "TCO$K",
    CompanyName: "Taubman Centers, Inc. Preferred Series K"
    },
    {
    Symbol: "TCP",
    CompanyName: "TC PipeLines, LP Common Units representing Limited Partner Interests"
    },
    {
    Symbol: "TCPI",
    CompanyName: "TCP International Holdings Ltd. Common Shares"
    },
    {
    Symbol: "TCRX",
    CompanyName: "THL Credit, Inc. 6.75% Notes due 2021"
    },
    {
    Symbol: "TCS",
    CompanyName: "Container Store (The) Common Stock"
    },
    {
    Symbol: "TD",
    CompanyName: "Toronto Dominion Bank (The) Common Stock"
    },
    {
    Symbol: "TDA",
    CompanyName: "Telephone and Data Systems, Inc. 5.875% Senior Notes due 2061"
    },
    {
    Symbol: "TDC",
    CompanyName: "Teradata Corporation Common Stock"
    },
    {
    Symbol: "TDE",
    CompanyName: "Telephone and Data Systems, Inc. 6.875% Senior Notes due 2059"
    },
    {
    Symbol: "TDF",
    CompanyName: "Templeton Dragon Fund, Inc. Common Stock"
    },
    {
    Symbol: "TDG",
    CompanyName: "Transdigm Group Incorporated Transdigm Group Inc. Common Stock"
    },
    {
    Symbol: "TDI",
    CompanyName: "Telephone and Data Systems, Inc. Sr Nt"
    },
    {
    Symbol: "TDJ",
    CompanyName: "Telephone and Data Systems, Inc. 7% Senior Notes due 2060"
    },
    {
    Symbol: "TDS",
    CompanyName: "Telephone and Data Systems, Inc. Common Shares"
    },
    {
    Symbol: "TDW",
    CompanyName: "Tidewater Inc. Common Stock"
    },
    {
    Symbol: "TDY",
    CompanyName: "Teledyne Technologies Incorporated Common Stock"
    },
    {
    Symbol: "TE",
    CompanyName: "TECO Energy, Inc. Common Stock"
    },
    {
    Symbol: "TEF",
    CompanyName: "Telefonica SA Common Stock"
    },
    {
    Symbol: "TEG",
    CompanyName: "Integrys Energy Group, Inc. Common Stock"
    },
    {
    Symbol: "TEI",
    CompanyName: "Templeton Emerging Markets Income Fund, Inc. Common Stock"
    },
    {
    Symbol: "TEL",
    CompanyName: "TE Connectivity Ltd. New Switzerland Registered Shares"
    },
    {
    Symbol: "TEN",
    CompanyName: "Tenneco Inc. Common Stock"
    },
    {
    Symbol: "TEO",
    CompanyName: "Telecom Argentina SA"
    },
    {
    Symbol: "TEP",
    CompanyName: "Tallgrass Energy Partners, LP Common Units representing limited partner interests"
    },
    {
    Symbol: "TER",
    CompanyName: "Teradyne, Inc. Common Stock"
    },
    {
    Symbol: "TEU",
    CompanyName: "Box Ships Inc. Common Shares"
    },
    {
    Symbol: "TEU$C",
    CompanyName: "Box Ships Inc. 9.00% Series C Cumulative Perpetual Preferred Stock"
    },
    {
    Symbol: "TEVA",
    CompanyName: "Teva Pharmaceutical Industries Limited American Depositary Shares"
    },
    {
    Symbol: "TEX",
    CompanyName: "Terex Corporation Common Stock"
    },
    {
    Symbol: "TFG",
    CompanyName: "Fixed Income Trust for Goldman Sachs Subordinated Notes, Series 2011"
    },
    {
    Symbol: "TFX",
    CompanyName: "Teleflex Incorporated Common Stock"
    },
    {
    Symbol: "TG",
    CompanyName: "Tredegar Corporation Common Stock"
    },
    {
    Symbol: "TGH",
    CompanyName: "Textainer Group Holdings Limited Common Shares"
    },
    {
    Symbol: "TGI",
    CompanyName: "Triumph Group, Inc. Common Stock"
    },
    {
    Symbol: "TGP",
    CompanyName: "Teekay LNG Partners L.P."
    },
    {
    Symbol: "TGS",
    CompanyName: "Transportadora de Gas del Sur SA TGS Common Stock"
    },
    {
    Symbol: "TGT",
    CompanyName: "Target Corporation Common Stock"
    },
    {
    Symbol: "THC",
    CompanyName: "Tenet Healthcare Corporation Common Stock"
    },
    {
    Symbol: "THG",
    CompanyName: "Hanover Insurance Group Inc"
    },
    {
    Symbol: "THGA",
    CompanyName: "The Hanover Insurance Group, Inc. 6.35% Subordinated Debentures due 2053"
    },
    {
    Symbol: "THO",
    CompanyName: "Thor Industries, Inc. Common Stock"
    },
    {
    Symbol: "THQ",
    CompanyName: "Tekla Healthcare Opportunies Fund Shares of Beneficial Interest"
    },
    {
    Symbol: "THR",
    CompanyName: "Thermon Group Holdings, Inc. Common Stock"
    },
    {
    Symbol: "THS",
    CompanyName: "Treehouse Foods, Inc. Common Stock"
    },
    {
    Symbol: "TI",
    CompanyName: "Telecom Italia S.P.A. New"
    },
    {
    Symbol: "TI.A",
    CompanyName: "Telecom Italia S.P.A. New"
    },
    {
    Symbol: "TIF",
    CompanyName: "Tiffany & Co. Common Stock"
    },
    {
    Symbol: "TIME",
    CompanyName: "Time Inc. Common Stock"
    },
    {
    Symbol: "TISI",
    CompanyName: "Team, Inc. Common Stock"
    },
    {
    Symbol: "TJX",
    CompanyName: "TJX Companies, Inc. (The) Common Stock"
    },
    {
    Symbol: "TK",
    CompanyName: "Teekay Corporation Common Stock"
    },
    {
    Symbol: "TKC",
    CompanyName: "Turkcell Iletisim Hizmetleri AS Common Stock"
    },
    {
    Symbol: "TKF",
    CompanyName: "Turkish Investment Fund, Inc. (The) Common Stock"
    },
    {
    Symbol: "TKR",
    CompanyName: "Timken Company (The) Common Stock"
    },
    {
    Symbol: "TLI",
    CompanyName: "LMP Corporate Loan Fund Inc Common Stock"
    },
    {
    Symbol: "TLK",
    CompanyName: "PT Telekomunikasi Indonesia, Tbk"
    },
    {
    Symbol: "TLLP",
    CompanyName: "Tesoro Logistics LP Common Units representing Limited Partner Interests"
    },
    {
    Symbol: "TLM",
    CompanyName: "Talisman Energy Inc. Common Stock"
    },
    {
    Symbol: "TLP",
    CompanyName: "Transmontaigne Partners L.P. Transmontaigne Partners L.P. Common Units representing limited partner interests"
    },
    {
    Symbol: "TLYS",
    CompanyName: "Tilly's, Inc. Common Stock"
    },
    {
    Symbol: "TM",
    CompanyName: "Toyota Motor Corporation Common Stock"
    },
    {
    Symbol: "TMH",
    CompanyName: "Team Health Holdings, Inc. Team Health Holdings, Inc."
    },
    {
    Symbol: "TMHC",
    CompanyName: "Taylor Morrison Home Corporation Class A Common Stock"
    },
    {
    Symbol: "TMK",
    CompanyName: "Torchmark Corporation Common Stock"
    },
    {
    Symbol: "TMK$B",
    CompanyName: "Torchmark Corporation 5.875% Junior Subordinated Debenture due 2052"
    },
    {
    Symbol: "TMO",
    CompanyName: "Thermo Fisher Scientific Inc Common Stock"
    },
    {
    Symbol: "TMST",
    CompanyName: "Timken Steel Corporation Common Shares"
    },
    {
    Symbol: "TMUS",
    CompanyName: "T"
    },
    {
    Symbol: "TMUS$A",
    CompanyName: "T"
    },
    {
    Symbol: "TNC",
    CompanyName: "Tennant Company Common Stock"
    },
    {
    Symbol: "TNET",
    CompanyName: "TriNet Group, Inc. Common Stock"
    },
    {
    Symbol: "TNH",
    CompanyName: "Terra Nitrogen Company, L.P. Common Units"
    },
    {
    Symbol: "TNK",
    CompanyName: "Teekay Tankers Ltd."
    },
    {
    Symbol: "TNP",
    CompanyName: "Tsakos Energy Navigation Ltd Common Shares"
    },
    {
    Symbol: "TNP$B",
    CompanyName: "Tsakos Energy Navigation Ltd Red Perp Pfd Ser B% (Bermuda)"
    },
    {
    Symbol: "TNP$C",
    CompanyName: "Tsakos Energy Navigation Ltd 8.875% Series C Preferred Cumulative Redeemable Perpetual Preferred Shares"
    },
    {
    Symbol: "TOL",
    CompanyName: "Toll Brothers Inc. Common Stock"
    },
    {
    Symbol: "TOO",
    CompanyName: "Teekay Offshore Partners L.P. Common Units representing Limited Partner Interests"
    },
    {
    Symbol: "TOO$A",
    CompanyName: "Teekay Offshore Partners L.P. 7.25% Series A Redeemable Preferred Units"
    },
    {
    Symbol: "TOT",
    CompanyName: "Total S.A."
    },
    {
    Symbol: "TOWR",
    CompanyName: "Tower International, Inc. Common stock"
    },
    {
    Symbol: "TPC",
    CompanyName: "Tutor Perini Corporation Common Stock"
    },
    {
    Symbol: "TPH",
    CompanyName: "Tri Pointe Homes, Inc. Common Stock"
    },
    {
    Symbol: "TPL",
    CompanyName: "Texas Pacific Land Trust Common Stock"
    },
    {
    Symbol: "TPRE",
    CompanyName: "Third Point Reinsurance Ltd. Common Shares"
    },
    {
    Symbol: "TPUB",
    CompanyName: "Tribune Publishing Company Common Stock"
    },
    {
    Symbol: "TPVG",
    CompanyName: "TriplePoint Venture Growth BDC Corp. Common Stock"
    },
    {
    Symbol: "TPX",
    CompanyName: "Tempur Sealy International, Inc. Common Stock"
    },
    {
    Symbol: "TPZ",
    CompanyName: "Tortoise Power and Energy Infrastructure Fund, Inc Common Stock"
    },
    {
    Symbol: "TR",
    CompanyName: "Tootsie Roll Industries, Inc. Common Stock"
    },
    {
    Symbol: "TRC",
    CompanyName: "Tejon Ranch Co Common Stock"
    },
    {
    Symbol: "TRCO",
    CompanyName: "Tribune Media Company Class A Common Stock"
    },
    {
    Symbol: "TREC",
    CompanyName: "Trecora Resources Common Stock"
    },
    {
    Symbol: "TREX",
    CompanyName: "Trex Company, Inc. Common Stock"
    },
    {
    Symbol: "TRF",
    CompanyName: "Templeton Russia and East European Fund, Inc. Common Stock"
    },
    {
    Symbol: "TRGP",
    CompanyName: "Targa Resources, Inc. Common Stock"
    },
    {
    Symbol: "TRI",
    CompanyName: "Thomson Reuters Corp Ordinary Shares"
    },
    {
    Symbol: "TRK",
    CompanyName: "Speedway Motorsports, Inc. Common Stock"
    },
    {
    Symbol: "TRLA",
    CompanyName: "Trulia, Inc. Common Stock"
    },
    {
    Symbol: "TRMR",
    CompanyName: "Tremor Video, Inc. Common Stock"
    },
    {
    Symbol: "TRN",
    CompanyName: "Trinity Industries, Inc. Common Stock"
    },
    {
    Symbol: "TRNO",
    CompanyName: "Terreno Realty Corporation Common Stock"
    },
    {
    Symbol: "TRNO$A",
    CompanyName: "Terreno Realty Corporation Preferred Shares Series A"
    },
    {
    Symbol: "TROX",
    CompanyName: "Tronox Limited Ordinary Shares Class A $0.01 par"
    },
    {
    Symbol: "TRP",
    CompanyName: "TransCanada Corporation Common Stock"
    },
    {
    Symbol: "TRQ",
    CompanyName: "Turquoise Hill Resources Ltd. Ordinary Shares"
    },
    {
    Symbol: "TRR",
    CompanyName: "TRC Companies, Inc. Common Stock"
    },
    {
    Symbol: "TRUP",
    CompanyName: "Trupanion, Inc. Common Stock"
    },
    {
    Symbol: "TRV",
    CompanyName: "The Travelers Companies, Inc. Common Stock"
    },
    {
    Symbol: "TRW",
    CompanyName: "TRW Automotive Holdings Corporation Common Stock"
    },
    {
    Symbol: "TS",
    CompanyName: "Tenaris S.A. American Depositary Shares"
    },
    {
    Symbol: "TSE",
    CompanyName: "Trinseo S.A. Ordinary Shares"
    },
    {
    Symbol: "TSI",
    CompanyName: "TCW Strategic Income Fund, Inc. Common Stock"
    },
    {
    Symbol: "TSL",
    CompanyName: "Trina Solar Limited Sponsored ADR (Cayman Islands)"
    },
    {
    Symbol: "TSLF",
    CompanyName: "THL Credit Senior Loan Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "TSLX",
    CompanyName: "TPG Specialty Lending, Inc. Common Stock"
    },
    {
    Symbol: "TSM",
    CompanyName: "Taiwan Semiconductor Manufacturing Company Ltd."
    },
    {
    Symbol: "TSN",
    CompanyName: "Tyson Foods, Inc. Common Stock"
    },
    {
    Symbol: "TSNU",
    CompanyName: "Tyson Foods, Inc. Tangible Equity Unit 1 Prepaid Stock Purchase Contact & 1 Sr (Amortorizing NT)"
    },
    {
    Symbol: "TSO",
    CompanyName: "Tesoro Corporation Common Stock"
    },
    {
    Symbol: "TSQ",
    CompanyName: "Townsquare Media, Inc. Class A Common Stock"
    },
    {
    Symbol: "TSS",
    CompanyName: "Total System Services, Inc. Common Stock"
    },
    {
    Symbol: "TSU",
    CompanyName: "TIM Participacoes S.A. American Depositary Shares (Each representing 5 Common Shares)"
    },
    {
    Symbol: "TTC",
    CompanyName: "Toro Company (The) Common Stock"
    },
    {
    Symbol: "TTF",
    CompanyName: "Thai Fund, Inc. (The) Common Stock"
    },
    {
    Symbol: "TTI",
    CompanyName: "Tetra Technologies, Inc. Common Stock"
    },
    {
    Symbol: "TTM",
    CompanyName: "Tata Motors Ltd Tata Motors Limited"
    },
    {
    Symbol: "TTP",
    CompanyName: "Tortoise Pipeline & Energy Fund, Inc. Common Stock"
    },
    {
    Symbol: "TU",
    CompanyName: "Telus Corporation Ordinary Shares"
    },
    {
    Symbol: "TUMI",
    CompanyName: "Tumi Holdings, Inc. Common Stock"
    },
    {
    Symbol: "TUP",
    CompanyName: "Tupperware Brands Corporation Common Stock"
    },
    {
    Symbol: "TV",
    CompanyName: "Grupo Televisa S.A. Common Stock"
    },
    {
    Symbol: "TVC",
    CompanyName: "Tennessee Valley Authority Common Stock"
    },
    {
    Symbol: "TVE",
    CompanyName: "Tennessee Valley Authority"
    },
    {
    Symbol: "TVPT",
    CompanyName: "Travelport Worldwide Limited Common Shares"
    },
    {
    Symbol: "TW",
    CompanyName: "Towers Watson & Co Common Stock Class A"
    },
    {
    Symbol: "TWC",
    CompanyName: "Time Warner Cable Inc Common Stock"
    },
    {
    Symbol: "TWI",
    CompanyName: "Titan International, Inc. Common Stock"
    },
    {
    Symbol: "TWN",
    CompanyName: "Taiwan Fund, Inc. (The) Common Stock"
    },
    {
    Symbol: "TWO",
    CompanyName: "Two Harbors Investment Corp"
    },
    {
    Symbol: "TWTR",
    CompanyName: "Twitter, Inc. Common Stock"
    },
    {
    Symbol: "TWX",
    CompanyName: "Time Warner Inc. New Common Stock"
    },
    {
    Symbol: "TX",
    CompanyName: "Ternium S.A. Ternium S.A. American Depositary Shares (each representing ten shares, USD1.00 par value)"
    },
    {
    Symbol: "TXT",
    CompanyName: "Textron Inc. Common Stock"
    },
    {
    Symbol: "TXTR",
    CompanyName: "Textura Corporation Common Stock"
    },
    {
    Symbol: "TY",
    CompanyName: "Tri Continental Corporation Common Stock"
    },
    {
    Symbol: "TY$",
    CompanyName: "Tri Continental Corporation Preferred Stock"
    },
    {
    Symbol: "TYC",
    CompanyName: "Tyco International plc (Ireland) Ordinary Share"
    },
    {
    Symbol: "TYG",
    CompanyName: "Tortoise Energy Infrastructure Corporation Common Stock"
    },
    {
    Symbol: "TYG$B",
    CompanyName: "Tortoise Energy Infrastructure Corporation Mandatory Red Pfd Ser B"
    },
    {
    Symbol: "TYG$C",
    CompanyName: "Tortoise Energy Infrastructure Corporation Series C Mandatory Redeemable Preferred Shares"
    },
    {
    Symbol: "TYL",
    CompanyName: "Tyler Technologies, Inc. Common Stock"
    },
    {
    Symbol: "TZF",
    CompanyName: "Bear Stearns Depositor, Inc. Pfd Stk TRUCs Srs 2001"
    },
    {
    Symbol: "UA",
    CompanyName: "Under Armour, Inc. Class A Common Stock"
    },
    {
    Symbol: "UAL",
    CompanyName: "United Continental Holdings"
    },
    {
    Symbol: "UAM",
    CompanyName: "Universal American Corporation New Common Stock"
    },
    {
    Symbol: "UAN",
    CompanyName: "CVR Partners, LP Common Units representing Limited Partner Interests"
    },
    {
    Symbol: "UBA",
    CompanyName: "Urstadt Biddle Properties Inc. Common Stock"
    },
    {
    Symbol: "UBP",
    CompanyName: "Urstadt Biddle Properties Inc. Common Stock"
    },
    {
    Symbol: "UBP$F",
    CompanyName: "Urstadt Biddle Properties Inc. Pfd Ser F"
    },
    {
    Symbol: "UBP$G",
    CompanyName: "Urstadt Biddle Properties Inc. Preferred Stock Series G 6.75%"
    },
    {
    Symbol: "UBS",
    CompanyName: "UBS Group AG Registered Ordinary Shares"
    },
    {
    Symbol: "UBS$D",
    CompanyName: "UBS AG Trust Preferred Securities"
    },
    {
    Symbol: "UCP",
    CompanyName: "UCP, Inc. Class A Common Stock"
    },
    {
    Symbol: "UDR",
    CompanyName: "UDR, Inc. Common Stock"
    },
    {
    Symbol: "UE.V",
    CompanyName: "Urban Edge Properties Common Shares of Beneficial Interest When Issued"
    },
    {
    Symbol: "UFI",
    CompanyName: "Unifi, Inc. New Common Stock"
    },
    {
    Symbol: "UFS",
    CompanyName: "Domtar Corporation (NEW) Common Stock"
    },
    {
    Symbol: "UGI",
    CompanyName: "UGI Corporation Common Stock"
    },
    {
    Symbol: "UGP",
    CompanyName: "Ultrapar Participacoes S.A. (New) American Depositary Shares (Each representing one Common Share)"
    },
    {
    Symbol: "UHS",
    CompanyName: "Universal Health Services, Inc. Common Stock"
    },
    {
    Symbol: "UHT",
    CompanyName: "Universal Health Realty Income Trust Common Stock"
    },
    {
    Symbol: "UIL",
    CompanyName: "UIL Holdings Corporation Common Stock"
    },
    {
    Symbol: "UIS",
    CompanyName: "Unisys Corporation New Common Stock"
    },
    {
    Symbol: "UL",
    CompanyName: "Unilever PLC Common Stock"
    },
    {
    Symbol: "UMC",
    CompanyName: "United Microelectronics Corporation (NEW) Common Stock"
    },
    {
    Symbol: "UMH",
    CompanyName: "UMH Properties, Inc. Common Stock"
    },
    {
    Symbol: "UMH$A",
    CompanyName: "UMH Properties, Inc. 8.25% Series A Cumulative Redeemable Preferred Stock, Liquidation Preference $25 per share"
    },
    {
    Symbol: "UN",
    CompanyName: "Unilever NV Common Stock"
    },
    {
    Symbol: "UNF",
    CompanyName: "Unifirst Corporation Common Stock"
    },
    {
    Symbol: "UNH",
    CompanyName: "UnitedHealth Group Incorporated Common Stock"
    },
    {
    Symbol: "UNM",
    CompanyName: "Unum Group Common Stock"
    },
    {
    Symbol: "UNP",
    CompanyName: "Union Pacific Corporation Common Stock"
    },
    {
    Symbol: "UNT",
    CompanyName: "Unit Corporation Common Stock"
    },
    {
    Symbol: "UPL",
    CompanyName: "Ultra Petroleum Corp. Common Stock"
    },
    {
    Symbol: "UPS",
    CompanyName: "United Parcel Service, Inc. Common Stock"
    },
    {
    Symbol: "URI",
    CompanyName: "United Rentals, Inc. Common Stock"
    },
    {
    Symbol: "USA",
    CompanyName: "Liberty All"
    },
    {
    Symbol: "USAC",
    CompanyName: "USA Compression Partners, LP Common Units Representing Limited Partner Interests"
    },
    {
    Symbol: "USB",
    CompanyName: "U.S. Bancorp Common Stock"
    },
    {
    Symbol: "USB$A",
    CompanyName: "U.S. Bancorp Depositary Shares, Each representing a 1/100th interest in a share of Series A Non"
    },
    {
    Symbol: "USB$H",
    CompanyName: "U.S. Bancorp Depositary Shares repstg 1/1000th Pfd Ser B"
    },
    {
    Symbol: "USB$M",
    CompanyName: "U.S. Bancorp Depositary Shares Representing 1/1000th Interest in a Shares Series F"
    },
    {
    Symbol: "USB$N",
    CompanyName: "US Bancorp Del DEPOSITARY SH S G"
    },
    {
    Symbol: "USB$O",
    CompanyName: "US Bancorp Del Dep Shs Repstg 1/1000th Perp Pfd Ser H"
    },
    {
    Symbol: "USDP",
    CompanyName: "USD Partners LP Common Units representing limited partner interest"
    },
    {
    Symbol: "USG",
    CompanyName: "USG Corporation Common Stock"
    },
    {
    Symbol: "USM",
    CompanyName: "United States Cellular Corporation Common Stock"
    },
    {
    Symbol: "USNA",
    CompanyName: "USANA Health Sciences, Inc. Common Stock"
    },
    {
    Symbol: "USPH",
    CompanyName: "U.S. Physical Therapy, Inc. Common Stock"
    },
    {
    Symbol: "UTF",
    CompanyName: "Cohen & Steers Infrastructure Fund, Inc Common Stock"
    },
    {
    Symbol: "UTI",
    CompanyName: "Universal Technical Institute Inc Common Stock"
    },
    {
    Symbol: "UTL",
    CompanyName: "UNITIL Corporation Common Stock"
    },
    {
    Symbol: "UTX",
    CompanyName: "United Technologies Corporation Common Stock"
    },
    {
    Symbol: "UTX$A",
    CompanyName: "United Technologies Corp Corp Unit"
    },
    {
    Symbol: "UVE",
    CompanyName: "UNIVERSAL INSURANCE HOLDINGS INC Common Stock"
    },
    {
    Symbol: "UVV",
    CompanyName: "Universal Corporation Common Stock"
    },
    {
    Symbol: "UZA",
    CompanyName: "United States Cellular Corporation 6.95% Senior Notes due 2060"
    },
    {
    Symbol: "UZB",
    CompanyName: "United States Cellular Corporation 7.25% Senior Notes due 2063"
    },
    {
    Symbol: "V",
    CompanyName: "Visa Inc."
    },
    {
    Symbol: "VAC",
    CompanyName: "Marriot Vacations Worldwide Corporation Common Stock"
    },
    {
    Symbol: "VAL",
    CompanyName: "Valspar Corporation (The) Common Stock"
    },
    {
    Symbol: "VALE",
    CompanyName: "VALE S.A. American Depositary Shares Each Representing one common share"
    },
    {
    Symbol: "VALE.P",
    CompanyName: "VALE S.A."
    },
    {
    Symbol: "VAR",
    CompanyName: "Varian Medical Systems, Inc. Common Stock"
    },
    {
    Symbol: "VBF",
    CompanyName: "Invesco Bond Fund Common Stock"
    },
    {
    Symbol: "VC",
    CompanyName: "Visteon Corporation Common Stock"
    },
    {
    Symbol: "VCO",
    CompanyName: "Vina Concha Y Toro Common Stock"
    },
    {
    Symbol: "VCRA",
    CompanyName: "Vocera Communications, Inc. Common Stock"
    },
    {
    Symbol: "VCV",
    CompanyName: "Invesco California Value Municipal Income Trust Common Stock"
    },
    {
    Symbol: "VEC",
    CompanyName: "Vectrus, Inc. Common Stock"
    },
    {
    Symbol: "VEEV",
    CompanyName: "Veeva Systems Inc. Class A Common Stock"
    },
    {
    Symbol: "VET",
    CompanyName: "Vermilion Energy Inc. Common (Canada)"
    },
    {
    Symbol: "VFC",
    CompanyName: "V.F. Corporation Common Stock"
    },
    {
    Symbol: "VG",
    CompanyName: "Vonage Holdings Corp. Common Stock"
    },
    {
    Symbol: "VGI",
    CompanyName: "Virtus Global Multi"
    },
    {
    Symbol: "VGM",
    CompanyName: "Invesco Trust for Investment Grade Municipals Common Stock (DE)"
    },
    {
    Symbol: "VGR",
    CompanyName: "Vector Group Ltd. Common Stock"
    },
    {
    Symbol: "VHI",
    CompanyName: "Valhi, Inc. Common Stock"
    },
    {
    Symbol: "VIPS",
    CompanyName: "Vipshop Holdings Limited American Depositary Shares, each representing two ordinary shares"
    },
    {
    Symbol: "VIV",
    CompanyName: "Telefonica Brasil, S.A. ADS"
    },
    {
    Symbol: "VJET",
    CompanyName: "voxeljet AG American Depositary Shares, each representing one"
    },
    {
    Symbol: "VKQ",
    CompanyName: "Invesco Municipal Trust Common Stock"
    },
    {
    Symbol: "VLO",
    CompanyName: "Valero Energy Corporation Common Stock"
    },
    {
    Symbol: "VLP",
    CompanyName: "Valero Energy Partners LP Common Units representing limited partner interests"
    },
    {
    Symbol: "VLRS",
    CompanyName: "Controladora Vuela Compania de Aviacion, S.A.B. de C.V. American Depositary Shares, each representing ten (10) Ordinary Participation Certificates"
    },
    {
    Symbol: "VLT",
    CompanyName: "Invesco High Income Trust II"
    },
    {
    Symbol: "VLY",
    CompanyName: "Valley National Bancorp Common Stock"
    },
    {
    Symbol: "VLY.W",
    CompanyName: "Valley National Bancorp Warrants Expiring 11/14/2018"
    },
    {
    Symbol: "VMC",
    CompanyName: "Vulcan Materials Company (Holding Company) Common Stock"
    },
    {
    Symbol: "VMEM",
    CompanyName: "Violin Memory, Inc. Common Stock"
    },
    {
    Symbol: "VMI",
    CompanyName: "Valmont Industries, Inc. Common Stock"
    },
    {
    Symbol: "VMO",
    CompanyName: "Invesco Municipal Opportunity Trust Common Stock"
    },
    {
    Symbol: "VMW",
    CompanyName: "Vmware, Inc. Common stock, Class A"
    },
    {
    Symbol: "VNCE",
    CompanyName: "Vince Holding Corp. Common Stock"
    },
    {
    Symbol: "VNO",
    CompanyName: "Vornado Realty Trust Common Stock"
    },
    {
    Symbol: "VNO$G",
    CompanyName: "Vornado Realty Trust Preferred Series G"
    },
    {
    Symbol: "VNO$I",
    CompanyName: "Vornado Realty Trust Preferred Series I"
    },
    {
    Symbol: "VNO$J",
    CompanyName: "Vornado Realty Trust PFD CUMULATIVE RED SER J %"
    },
    {
    Symbol: "VNO$K",
    CompanyName: "Vornado Realty Trust Pfd S K"
    },
    {
    Symbol: "VNO$L",
    CompanyName: "Vornado Realty Trust Pfd Ser L %"
    },
    {
    Symbol: "VNO.V",
    CompanyName: "Vornado Realty Trust Common Shares of Beneficial Interest Ex"
    },
    {
    Symbol: "VNTV",
    CompanyName: "Vantiv, Inc. Class A Common Stock"
    },
    {
    Symbol: "VOC",
    CompanyName: "VOC Energy Trust Units of Beneficial Interest"
    },
    {
    Symbol: "VOYA",
    CompanyName: "Voya Financial, Inc. Common Stock"
    },
    {
    Symbol: "VPG",
    CompanyName: "Vishay Precision Group, Inc. Common Stock"
    },
    {
    Symbol: "VPV",
    CompanyName: "Invesco Pennsylvania Value Municipal Income Trust Common Stock (DE)"
    },
    {
    Symbol: "VR",
    CompanyName: "Validus Holdings, Ltd. Common Shares"
    },
    {
    Symbol: "VRS",
    CompanyName: "Verso Corporation Common Stock"
    },
    {
    Symbol: "VRTV",
    CompanyName: "Veritiv Corporation Common Stock"
    },
    {
    Symbol: "VRX",
    CompanyName: "Valeant Pharmaceuticals International, Inc."
    },
    {
    Symbol: "VSH",
    CompanyName: "Vishay Intertechnology, Inc. Common Stock"
    },
    {
    Symbol: "VSI",
    CompanyName: "Vitamin Shoppe, Inc Common Stock"
    },
    {
    Symbol: "VSLR",
    CompanyName: "Vivint Solar, Inc. Common Stock"
    },
    {
    Symbol: "VTA",
    CompanyName: "Invesco Credit Opportunities Fund Common Shares of Beneficial Interest"
    },
    {
    Symbol: "VTN",
    CompanyName: "Invesco Trust for Investment Grade New York Municipals Common Stock"
    },
    {
    Symbol: "VTR",
    CompanyName: "Ventas, Inc. Common Stock"
    },
    {
    Symbol: "VTRB",
    CompanyName: "Ventas Realty, Limited Partnership // Ventas Capital Corporation 5.45% Senior Notes due 2043"
    },
    {
    Symbol: "VTTI",
    CompanyName: "VTTI Energy Partners LP Common Units representing limited partner interests"
    },
    {
    Symbol: "VVC",
    CompanyName: "Vectren Corporation Common Stock"
    },
    {
    Symbol: "VVI",
    CompanyName: "Viad Corp Common Stock"
    },
    {
    Symbol: "VVR",
    CompanyName: "Invesco Senior Income Trust Common Stock (DE)"
    },
    {
    Symbol: "VZ",
    CompanyName: "Verizon Communications Inc. Common Stock"
    },
    {
    Symbol: "VZA",
    CompanyName: "Verizon Communications Inc. 5.90% Notes due 2054"
    },
    {
    Symbol: "W",
    CompanyName: "Wayfair Inc. Class A Common Stock"
    },
    {
    Symbol: "WAB",
    CompanyName: "Westinghouse Air Brake Technologies Corporation Common Stock"
    },
    {
    Symbol: "WAC",
    CompanyName: "Walter Investment Management Corp. Common Stock"
    },
    {
    Symbol: "WAGE",
    CompanyName: "WageWorks, Inc. Common Stock $0.001 par value"
    },
    {
    Symbol: "WAIR",
    CompanyName: "Wesco Aircraft Holdings, Inc. Common Stock"
    },
    {
    Symbol: "WAL",
    CompanyName: "Western Alliance Bancorporation Common Stock (DE)"
    },
    {
    Symbol: "WAT",
    CompanyName: "Waters Corporation Common Stock"
    },
    {
    Symbol: "WBAI",
    CompanyName: "500.com Limited American Depositary Shares, each representing 10 Class A shares"
    },
    {
    Symbol: "WBC",
    CompanyName: "Wabco Holdings Inc. Common Stock"
    },
    {
    Symbol: "WBK",
    CompanyName: "Westpac Banking Corporation Common Stock"
    },
    {
    Symbol: "WBS",
    CompanyName: "Webster Financial Corporation Common Stock"
    },
    {
    Symbol: "WBS$E",
    CompanyName: "Webster Financial Corporation Dep Shs Repstg 1/1000th Perp Pfd Ser E"
    },
    {
    Symbol: "WBS.W",
    CompanyName: "Webster Financial Corporation Warrant (expiring November 21, 2018)"
    },
    {
    Symbol: "WCC",
    CompanyName: "WESCO International, Inc. Common Stock"
    },
    {
    Symbol: "WCG",
    CompanyName: "Wellcare Health Plans, Inc. Common Stock"
    },
    {
    Symbol: "WCIC",
    CompanyName: "WCI Communities, Inc. Common Stock"
    },
    {
    Symbol: "WCN",
    CompanyName: "Waste Connections, Inc. Common Stock"
    },
    {
    Symbol: "WD",
    CompanyName: "Walker & Dunlop, Inc Common Stock"
    },
    {
    Symbol: "WDAY",
    CompanyName: "Workday, Inc. Common Stock"
    },
    {
    Symbol: "WDR",
    CompanyName: "Waddell & Reed Financial, Inc. Common Stock"
    },
    {
    Symbol: "WEA",
    CompanyName: "Western Asset Bond Fund Share of Beneficial Interest"
    },
    {
    Symbol: "WEC",
    CompanyName: "Wisconsin Energy Corporation Common Stock"
    },
    {
    Symbol: "WES",
    CompanyName: "Western Gas Partners, LP Limited Partner Interests"
    },
    {
    Symbol: "WEX",
    CompanyName: "WEX Inc. common stock"
    },
    {
    Symbol: "WF",
    CompanyName: "Woori Bank American Depositary Shares (Each representing 3 shares of Common Stock)"
    },
    {
    Symbol: "WFC",
    CompanyName: "Wells Fargo & Company Common Stock"
    },
    {
    Symbol: "WFC$J",
    CompanyName: "Wells Fargo & Company Wells Fargo & Company 8.00% Non"
    },
    {
    Symbol: "WFC$L",
    CompanyName: "Wells Fargo & Company Wells Fargo & Company 7.50% Non"
    },
    {
    Symbol: "WFC$N",
    CompanyName: "Wells Fargo & Company Dep Shs Repstg 1/1000th Perp Pfd Cl A Ser N"
    },
    {
    Symbol: "WFC$O",
    CompanyName: "Wells Fargo & Company Depositary Shares Representing 1/1000th Perpetual Preferred Class A Series O"
    },
    {
    Symbol: "WFC$P",
    CompanyName: "Wells Fargo & Company Dep Shs Repstg 1/1000th Int Non Cum Perp Cl A Pfd (Ser P)"
    },
    {
    Symbol: "WFC$Q",
    CompanyName: "Wells Fargo & Company Depositary Shares Representing 1/1000th Interest Perpetual Preferred Class A Series Q Fixed to Floating"
    },
    {
    Symbol: "WFC$R",
    CompanyName: "Wells Fargo & Company Dep Shs Repstg 1/1000th Int Perp Pfd Cl A (Ser R Fixed To Flltg)"
    },
    {
    Symbol: "WFC$T",
    CompanyName: "Wells Fargo & Company New Depository Share Representing 1/1000th Perp. Preferred Class A Series T"
    },
    {
    Symbol: "WFC.W",
    CompanyName: "Wells Fargo & Company Warrants expiring October 28, 2018"
    },
    {
    Symbol: "WFE$A",
    CompanyName: "Wells Fargo & Company Cumulative Perpetual Preferred Stock, Series A, Liquidation Preference $25 per share"
    },
    {
    Symbol: "WFT",
    CompanyName: "Weatherford International plc (Ireland)"
    },
    {
    Symbol: "WG",
    CompanyName: "Willbros Group, Inc. (DE) Common Stock"
    },
    {
    Symbol: "WGL",
    CompanyName: "WGL Holdings IncCommon Stock"
    },
    {
    Symbol: "WGO",
    CompanyName: "Winnebago Industries, Inc. Common Stock"
    },
    {
    Symbol: "WGP",
    CompanyName: "Western Gas Equity Partners, LP Common Units Representing Limited Partner Interests"
    },
    {
    Symbol: "WHG",
    CompanyName: "Westwood Holdings Group Inc Common Stock"
    },
    {
    Symbol: "WHR",
    CompanyName: "Whirlpool Corporation Common Stock"
    },
    {
    Symbol: "WHX",
    CompanyName: "Whiting USA Trust I Whiting USA Trust I"
    },
    {
    Symbol: "WHZ",
    CompanyName: "Whiting USA Trust II Units of Beneficial Interest"
    },
    {
    Symbol: "WIA",
    CompanyName: "Western Asset/Claymore Inflation"
    },
    {
    Symbol: "WIT",
    CompanyName: "Wipro Limited Common Stock"
    },
    {
    Symbol: "WIW",
    CompanyName: "Western Asset/Claymore Inflation"
    },
    {
    Symbol: "WK",
    CompanyName: "Workiva Inc. Class A Common Stock"
    },
    {
    Symbol: "WLH",
    CompanyName: "Lyon William Homes Common Stock (Class A)"
    },
    {
    Symbol: "WLK",
    CompanyName: "Westlake Chemical Corporation Common Stock"
    },
    {
    Symbol: "WLKP",
    CompanyName: "Westlake Chemical Partners LP Common Units representing limited partner interests"
    },
    {
    Symbol: "WLL",
    CompanyName: "Whiting Petroleum Corporation Common Stock"
    },
    {
    Symbol: "WLT",
    CompanyName: "Walter Energy, Inc. Common Stock"
    },
    {
    Symbol: "WM",
    CompanyName: "Waste Management, Inc. Common Stock"
    },
    {
    Symbol: "WMB",
    CompanyName: "Williams Companies, Inc. (The) Common Stock"
    },
    {
    Symbol: "WMC",
    CompanyName: "Western Asset Mortgage Capital Corporation Common Stock"
    },
    {
    Symbol: "WMK",
    CompanyName: "Weis Markets, Inc. Common Stock"
    },
    {
    Symbol: "WMLP",
    CompanyName: "Westmoreland Resource Partners, LP Common Units representing Limited Partner Interests"
    },
    {
    Symbol: "WMS",
    CompanyName: "Advanced Drainage Systems, Inc. Common Stock"
    },
    {
    Symbol: "WMT",
    CompanyName: "Wal"
    },
    {
    Symbol: "WNC",
    CompanyName: "Wabash National Corporation Common Stock"
    },
    {
    Symbol: "WNR",
    CompanyName: "Western Refining Inc. Western Refining, Inc. Common Stock"
    },
    {
    Symbol: "WNRL",
    CompanyName: "Western Refining Logistics, LP Common Units representing limited partner interests"
    },
    {
    Symbol: "WNS",
    CompanyName: "WNS (Holdings) Limited Sponsored ADR (Jersey)"
    },
    {
    Symbol: "WOR",
    CompanyName: "Worthington Industries, Inc. Common Stock"
    },
    {
    Symbol: "WPC",
    CompanyName: "W.P. Carey Inc. REIT"
    },
    {
    Symbol: "WPG",
    CompanyName: "Washington Prime Group Inc. Common Stock"
    },
    {
    Symbol: "WPP",
    CompanyName: "Wausau Paper Corp. Common Stock"
    },
    {
    Symbol: "WPT",
    CompanyName: "World Point Terminals, LP Common Units representing Limited Partner Interests"
    },
    {
    Symbol: "WPX",
    CompanyName: "WPX Energy, Inc. Common Stock"
    },
    {
    Symbol: "WPZ",
    CompanyName: "Williams Partners L.P. Common Units"
    },
    {
    Symbol: "WR",
    CompanyName: "Westar Energy, Inc. Common Stock"
    },
    {
    Symbol: "WRB",
    CompanyName: "W.R. Berkley Corporation Common Stock"
    },
    {
    Symbol: "WRB$B",
    CompanyName: "W.R. Berkley Corporation 5.625% Subordinated Debentures due 2053"
    },
    {
    Symbol: "WRE",
    CompanyName: "Washington Real Estate Investment Trust Common Stock"
    },
    {
    Symbol: "WRI",
    CompanyName: "Weingarten Realty Investors Common Stock"
    },
    {
    Symbol: "WRI$F",
    CompanyName: "Weingarten Realty Investors Depository Shares Restg 1/100 Pfd Ser F"
    },
    {
    Symbol: "WRT",
    CompanyName: "Winthrop Realty Trust 7.75% Senior Notes due 2022"
    },
    {
    Symbol: "WSH",
    CompanyName: "Willis Group Holdings Public Limited (Ireland) Common Stock"
    },
    {
    Symbol: "WSM",
    CompanyName: "Williams"
    },
    {
    Symbol: "WSO",
    CompanyName: "Watsco, Inc. Common Stock"
    },
    {
    Symbol: "WSO.B",
    CompanyName: "Watsco, Inc. Class B Common Stock"
    },
    {
    Symbol: "WSR",
    CompanyName: "Whitestone REIT Common Shares"
    },
    {
    Symbol: "WST",
    CompanyName: "West Pharmaceutical Services, Inc. Common Stock"
    },
    {
    Symbol: "WTI",
    CompanyName: "W&T Offshore, Inc. Common Stock"
    },
    {
    Symbol: "WTM",
    CompanyName: "White Mountains Insurance Group, Ltd. Common Stock"
    },
    {
    Symbol: "WTR",
    CompanyName: "Aqua America, Inc. Common Stock"
    },
    {
    Symbol: "WTS",
    CompanyName: "Watts Water Technologies, Inc. Class A Common Stock"
    },
    {
    Symbol: "WTW",
    CompanyName: "Weight Watchers International Inc Weight Watchers International Inc"
    },
    {
    Symbol: "WU",
    CompanyName: "Western Union Company (The) Common Stock"
    },
    {
    Symbol: "WUBA",
    CompanyName: "58.com Inc. American Depositary Shares, each representing 2 Class A Ordinary Shares"
    },
    {
    Symbol: "WWAV",
    CompanyName: "Whitewave Foods Company (The) Common Stock"
    },
    {
    Symbol: "WWE",
    CompanyName: "World Wrestling Entertainment, Inc. Class A Common Stock"
    },
    {
    Symbol: "WWW",
    CompanyName: "Wolverine World Wide, Inc. Common Stock"
    },
    {
    Symbol: "WX",
    CompanyName: "WuXi PharmaTech (Cayman) Inc. American Depositary Shares"
    },
    {
    Symbol: "WY",
    CompanyName: "Weyerhaeuser Company Common Stock"
    },
    {
    Symbol: "WY$A",
    CompanyName: "Weyerhaeuser Company Pref Conv Ser A"
    },
    {
    Symbol: "WYN",
    CompanyName: "Wyndham Worldwide Corp Common Stock"
    },
    {
    Symbol: "X",
    CompanyName: "United States Steel Corporation Common Stock"
    },
    {
    Symbol: "XCO",
    CompanyName: "EXCO Resources, Inc. Exco Resources, Inc. Common Stock"
    },
    {
    Symbol: "XEC",
    CompanyName: "Cimarex Energy Co Common Stock"
    },
    {
    Symbol: "XEL",
    CompanyName: "Xcel Energy Inc. Common Stock"
    },
    {
    Symbol: "XIN",
    CompanyName: "Xinyuan Real Estate Co Ltd American Depositary Shares"
    },
    {
    Symbol: "XKE",
    CompanyName: "Lehman ABS Corporation Corporate"
    },
    {
    Symbol: "XL",
    CompanyName: "XL Group plc"
    },
    {
    Symbol: "XLS",
    CompanyName: "Exelis Inc. Common Stock New"
    },
    {
    Symbol: "XNY",
    CompanyName: "China Xiniya Fashion Limited American Depositary Shares, each representing four ordinary shares"
    },
    {
    Symbol: "XOM",
    CompanyName: "Exxon Mobil Corporation Common Stock"
    },
    {
    Symbol: "XON",
    CompanyName: "Intrexon Corporation Common Stock"
    },
    {
    Symbol: "XOXO",
    CompanyName: "XO Group, Inc. Common Stock"
    },
    {
    Symbol: "XPO",
    CompanyName: "XPO Logistics, Inc."
    },
    {
    Symbol: "XRM",
    CompanyName: "Xerium Technologies, Inc. New Common Stock"
    },
    {
    Symbol: "XRS",
    CompanyName: "TAL Education Group American Depositary Shares, each representing 2 Class A common shares"
    },
    {
    Symbol: "XRX",
    CompanyName: "Xerox Corporation Common Stock"
    },
    {
    Symbol: "XUE",
    CompanyName: "Xueda Education Group American Depositary Shares, each representing two Ordinary Shares, $0.0001 par value"
    },
    {
    Symbol: "XYL",
    CompanyName: "Xylem Inc. Common Stock New"
    },
    {
    Symbol: "Y",
    CompanyName: "Alleghany Corporation Common Stock"
    },
    {
    Symbol: "YDKN",
    CompanyName: "Yadkin Financial Corporation Common Stock"
    },
    {
    Symbol: "YELP",
    CompanyName: "Yelp Inc. Class A Common Stock"
    },
    {
    Symbol: "YGE",
    CompanyName: "Yingli Green Energy Holding Company Limited ADR"
    },
    {
    Symbol: "YOKU",
    CompanyName: "Youku Tudou Inc. American Depositary Shares, each representing 18 Class A ordinary shares."
    },
    {
    Symbol: "YPF",
    CompanyName: "YPF Sociedad Anonima Common Stock"
    },
    {
    Symbol: "YUM",
    CompanyName: "Yum! Brands, Inc."
    },
    {
    Symbol: "YUME",
    CompanyName: "YuMe, Inc. Common Stock"
    },
    {
    Symbol: "YZC",
    CompanyName: "Yanzhou Coal Mining Company Limited Common Stock"
    },
    {
    Symbol: "ZA",
    CompanyName: "Zuoan Fashion Limited American Depositary Shares"
    },
    {
    Symbol: "ZAYO",
    CompanyName: "Zayo Group Holdings, Inc. Common Stock"
    },
    {
    Symbol: "ZB$A",
    CompanyName: "Zions Bancorporation Depositary Shares (Each representing 1/40th Interest in a Share of Series A Floating"
    },
    {
    Symbol: "ZB$F",
    CompanyName: "Zions Bancorporation Dep shs Repstg 1/40th Int Sh Ser F Fxd Rate Non Cum (Perp Pfd Stk)"
    },
    {
    Symbol: "ZB$G",
    CompanyName: "Zions Bancorporation Dep Shs Repstg 1/40th Perp Pfd Ser G"
    },
    {
    Symbol: "ZB$H",
    CompanyName: "Zions Bancorporation Dep Shs Repstg 1/40th Int Sh Ser H Perp Pfd Stk"
    },
    {
    Symbol: "ZBK",
    CompanyName: "Zions Bancorporation 6.95% Fixed"
    },
    {
    Symbol: "ZEN",
    CompanyName: "Zendesk, Inc. Common Stock"
    },
    {
    Symbol: "ZEP",
    CompanyName: "Zep Inc. Common Stock"
    },
    {
    Symbol: "ZF",
    CompanyName: "Zweig Fund, Inc. (The) Common Stock"
    },
    {
    Symbol: "ZFC",
    CompanyName: "ZAIS Financial Corp. Common Stock"
    },
    {
    Symbol: "ZMH",
    CompanyName: "Zimmer Holdings, Inc. Common Stock"
    },
    {
    Symbol: "ZNH",
    CompanyName: "China Southern Airlines Company Limited Common Stock"
    },
    {
    Symbol: "ZOES",
    CompanyName: "Zoe's Kitchen, Inc. Common Stock"
    },
    {
    Symbol: "ZPIN",
    CompanyName: "Zhaopin Limited American Depositary Shares, each reprenting two Ordinary Shares"
    },
    {
    Symbol: "ZQK",
    CompanyName: "Quiksilver, Inc. Common Stock"
    },
    {
    Symbol: "ZTR",
    CompanyName: "Zweig Total Return Fund, Inc. (The) Common Stock"
    },
    {
    Symbol: "ZTS",
    CompanyName: "Zoetis Inc. Class A Common Stock"
    },
    {
    Symbol: "ZX",
    CompanyName: "China Zenix Auto International Limited American Depositary Shares, each representing four ordinary shares."
    }
    ]

   module.export  =  symbols;