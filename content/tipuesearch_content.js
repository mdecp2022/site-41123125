var tipuesearch = {"pages": [{'title': 'About', 'text': '\xa0 \xa0 \xa0 \xa0  \xa0  \xa0  41123125 張敬揚 \xa0\xa0   \xa0\xa0\xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0\xa0  \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 cmsite: wcms use  https://github.com/mdecycu/cmsimde  as submodule \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 個人github倉儲 :  https://github.com/mdecp2022/site-41123125 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 個人動態網站(遠端) :  https://mdecp2022.github.io/site-41123125/content/index.html \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 個人網站(近端) :  https://stud.cycu.org:8036 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 考試網站: exam.cycu.org \n', 'tags': '', 'url': 'About.html'}, {'title': 'HW', 'text': '', 'tags': '', 'url': 'HW.html'}, {'title': 'w15-2', 'text': '原範例 (行走的綠色圖塊) \n 8自走 (作業)', 'tags': '', 'url': 'w15-2.html'}, {'title': 'w15', 'text': '\n \n \n 為何學習計算機程式需要建立個人倉儲? a:方便課程管理及使用. \n 全球資訊網能夠提供甚麼功能或有什麼優點? a:資訊時代發展的核心, 也是數十億人在網際網路上進行互動和瀏覽器的主要工具. \n Replit, stud.cycu.org 與 localhost 分別代表甚麼? a:1.Replit: 提供使用者雲端開發環境 \xa0 \xa02.stud.cycu.org: 學校網域 \xa0 \xa03.localhost(近端): 是一個在計算機網路中用於表示(此計算機)的主機名通常備用於本地環回網路接口; 近端加上 SSH 設定執行動態網站, 改版後以 acp.bat 推送至 Github 靜態網頁倉儲. \n https, ssh 到底提供使用者那些功能或優點? a:1.https 使用的是 SSL/TLS 加密封包 https是提供對網站伺服器的身分認證,保護交換資料與完整性. \xa0 \xa02.ssh:ssh aka. " Secure Shell" 就是利用 公開金鑰加密 , 在傳輸指令的過程對內容加密, 以保障資訊不被第三方取得. \n Brython 與 Python 有甚麼差別? a:Brython stands for "Browser Python" 意旨在瀏覽器上執行python程式 \n 能夠直接在瀏覽器中以 Brython 繪製中華民國國旗, 或模擬綠色方塊在方塊格點中任意移動, 代表甚麼? a:執行程式 並以色塊的方式呈現 將程式轉換為較人性化(視覺化)的表達方式 讓客戶端更為方便的瀏覽網站內容 \n 變數, 字串, 整數, 浮點數, 數列, Tuple, Dictionary, 函式, 重複迴圈, class, 物件導向, 資料庫, 這些名詞對您而言代表甚麼? a: 對我而言這些代表能讓程式執行更複雜的運算 (不論是使用者或客戶端)進而達到更接近理想的輸出內容 \n \n', 'tags': '', 'url': 'w15.html'}, {'title': 'w13', 'text': '\n 溫度轉換器 \n \'\'\'\nf = c*9/5+32\nc = (f-32)*5/9\n\'\'\'\nc = input("請輸入溫度")\n#print(type(c))\nc = float(c)\nprint(c, c*9/5+32) \n 溫度轉換器 "改" \n \'\'\'\nf-c*9/5+32\nc=(f-32)*5/9\n\'\'\'\nc = input("請輸入攝氏溫度值")\nprint(type(c))\nc= float(c)\nprint("你輸入的攝氏溫度:" + str(c),"等於華氏溫度:" + str(c*9/5 +32)) \n \n feedback : 除了利用 gits 來撰寫程式然後用個人網站來測試所寫程式外, 更是學到了如何將每行 code 轉成字串形式來 debug \n', 'tags': '', 'url': 'w13.html'}, {'title': 'w12-1', 'text': '\n \n  以下事先在頁面中加入 id="brython_div" 的 div 標註\n之後可利用 Brython 的 document 模組與此 html 標註對應\n \n  利用 html 建立一個 id="btn1" 的按鈕  \n 取使用者輸入 \n feedback : 加入新把戲 ! \n 學習到如何寫 html 的 button \n step1 : 賦予 id (功用為呼叫後面的函式) \n <p><button  id ="btn1">取使用者輸入</button></p> \n 呼叫函式 :\xa0 document["btn1"].bind(\'click\', get_input) \n document : 取到id應對的位置"btn1" 透過 id 來獲取元件所在位置 \n click : 點擊後呼叫函式 \n \n \n \n', 'tags': '', 'url': 'w12-1.html'}, {'title': 'w12', 'text': '\n hw 1st practice \n # Brython 的 input() 可以接受輸入提示字串, 跳出瀏覽器輸入表單後, 將輸入內容以字串取回\nuser_input_temp = input("請輸入攝氏溫度值:")\n# 接著列出 user_input_temp 變數的資料型別\nprint(type(user_input_temp)) \n \n hw 2nd practice \n # Brython 的 input() 可以接受輸入提示字串, 跳出瀏覽器輸入表單後, 將輸入內容以字串取回\nuser_input_temp = input("請輸入攝氏溫度值:")\n# 接著列出 user_input_temp 變數的資料型別\nprint(type(user_input_temp))\n# 到這裡已知利用 input() 函式將傳回字串, 接著以 float() 將字串轉為浮點數\nuser_input_temp = float(user_input_temp)\n# 因為攝氏溫度乘上 9/5 之後再加上 32 就可以得到對應的華氏溫度值\nFahrenheit = (user_input_temp*9/5) + 32\n# 到這裡, Fahrenheit 資料型別為浮點數, 而 user_input_temp 在第 8 行也轉為浮點數\n# 要將兩個浮點數與字串相加, 都必須透過 str() 轉為字串\nprint("攝氏 " + str(user_input_temp) + " 度, 等於華氏 " + str(Fahrenheit) + " 度.") \n \n feedback : hw1 : 設定變數, 印出所輸入之字串 結果為 <class \'str\'> \n \n 複製 code 到個人網站時 使用 </> 的功能 ( 選擇該 程式語言  ) \n \n 預加入新的 html (以 並列 功能)  以 w12-1 為例\xa0 因為 : 在 w12 的位階為 <h2>w12</h2> \n 所以 : 預使並列  就輸入不同字串並改成一樣位階  即可 並列  <h2> w12-1 </h2> \n \n 又說明了一次如何在字串加上超連結 \n 一步一步慢慢跟 還是可以的 \n 註 :  str  代表 字串 \n', 'tags': '', 'url': 'w12.html'}, {'title': 'w6', 'text': '變數 -> ? (for src), & (for src2) 變數 src= 變數 src2= \n \n 個人動態網站結合抽點程式 \n feedback : 無難度 跟著步驟即可    \n step1:將w6的 抽點程式 匯入github gits; 點擊 "Raw" 匯出該 gits 的網址 \n step2:變數輸入在 "src=" 前, 並複製該 gits 網址並加在 "=" 後方 呈現如下: \n "?(變數)src=url" 和 "&(變數)src2=url" \n 在與個人網站結合後, 可列出人數後, 再頁面中顯示出該學員的靜態網頁連結. \n 註  : src ->  source的縮寫， 表示外部文件的引用 \xa0 \xa0 \xa0  變數(variable) : 經宣告後導入 存放之資料 \xa0 \xa0 \xa0 ex : ?src = 存放 gits 字串之網址 (在src該區塊中匯入存放gits字串之網址) \n 12-1 \n', 'tags': '', 'url': 'w6.html'}, {'title': 'w5', 'text': '\xa0亂數模組 : \n w5 password_generator \n feedback : 把原本放在 About 的w5亂數模組移來hw \n', 'tags': '', 'url': 'w5.html'}, {'title': 'cp2022', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n \n  導入 brython 程式庫  \n \n \n \n \n \n \n  啟動 Brython  \n \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n \n  editor1 開始  \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n \n  editor1 結束  \n \n \n \n  ##########################################  \n \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n \n  editor2 開始  \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n \n  editor2 結束  \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'cp2022.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n \n  導入 brython 程式庫  \n \n \n \n \n \n \n  啟動 Brython  \n \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n \n  editor1 開始  \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n \n  editor1 結束  \n \n \n \n  ##########################################  \n \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n \n  editor2 開始  \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n \n  editor2 結束  \n \n', 'tags': '', 'url': 'Brython.html'}]};