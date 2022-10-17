---
layout: post
title:  "Tích của một số với một véctơ"
author: sloth
categories: [ Toán 10, Hình học]
image: assets/images/hinh_hoc.webp
tags: [sticky, véctơ]
---

Sau khi thành thạo phép cộng và trừ hai véctơ, chúng ta tiếp tục tìm hiểu phép nhân một số thực với một véctơ. 

## 1. Định nghĩa

Cho số thực $ k\ne 0 $ và $ \vec{a}\ne \vec{0} $. Tích của số $k $ với véctơ $ \vec{a}$ là một véctơ, kí hiệu $ k\vec{a} $, xác định như sau:

- Cùng hướng với $ \vec{a} $ nếu $ k>0 $, ngược hướng với $ \vec{a} $ nếu $ k<0 $;
- Độ dài bằng $ |k|.|\vec{a}|$.  Quy ước nếu $ k=0 $ hoặc $ \vec{a} = \vec{0} $ thì $ k\vec{a}=\vec{0}. $

**Ví dụ 1.** Cho hình vuông $ ABCD $. Dựng điểm $ E, F $ biết 
$$
\overrightarrow{AE} = 2 \overrightarrow{ AB};\quad\overrightarrow{BF} =- \frac{3}{2} \overrightarrow{BC}.
$$
**Ví dụ 2.** Cho tam giác $ABC $ có $ M,N $ lần lượt là trung điểm $ AB, AC $. Tìm số $ k $ trong mỗi trường hợp sau:

- $ \overrightarrow{AB} = k \overrightarrow{AM} $;
- $ \overrightarrow{CB} = k \overrightarrow{MN} $;
- $ \overrightarrow{AM} = k \overrightarrow{BM} $.

## 2. Tính chất

Với hai số thực $ a,b $ và hai véctơ $ \vec{a}, \vec{b} $, chúng ta có:

- $ k( \vec{a} \pm \vec{b})= k \vec{a} \pm k \vec{b}  $;
- $ (k+h) \vec{a} = k \vec{a} + h \vec{a}  $;
- $ k(h \vec{a} )  = (hk) \vec{a} = h (k \vec{a} )$;
- $ 1 \vec{a}  = \vec{a}; (-1) \vec{a} = - \vec{a} $.

Nhận xét, $ k \vec{a} = \vec{0}  $ khi và chỉ khi $ k=0 $ hoặc $ \vec{a} = \vec{0} $.

**Ví dụ 3.** Cho ba điểm $ A,B,C $, chứng minh:

1. $ 2 \overrightarrow{AB} + 2 \overrightarrow{BC} = 2 \overrightarrow{AC} $;
2. $ 3(5 \overrightarrow{AC})+ 2\overrightarrow{CB} - 13 \overrightarrow{AC} = \overrightarrow{AB} $;
3. $ 3( \overrightarrow{AB} + 2 \overrightarrow{BC}) -2( \overrightarrow{AB} + 3 \overrightarrow{BC} ) = \overrightarrow{AB}$.

## 3. Một số ứng dụng

### Qui tắc trung điểm

$ I $ là trung điểm $ AB $ khi và chỉ khi $ \overrightarrow{MA}+\overrightarrow{MB}=2\overrightarrow{MI}$, với $ M $ bất kì.

**Ví dụ 4.** Cho hình bình hành $ ABCD $ có tâm $ O $. Chứng minh rằng
$$
 \overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC} + \overrightarrow{OD} = \vec{0}. 
$$

### Qui tắc trọng tâm

$ G $ là trọng tâm tam giác $ABC $ khi và chỉ khi $ \overrightarrow{MA} + \overrightarrow{MB} + \overrightarrow{MC} = 3 \overrightarrow{MG}$, với $ M $ bất kì.

**Ví dụ 5.** Cho bốn điểm $A,B,C,D$. Gọi $ E,F $ là trung điểm của $ AB,CD $ và $ O $ là trung điểm của $ EF. $ Chứng minh rằng 

1. $\overrightarrow{OA}+\overrightarrow{OB}+\overrightarrow{OC}+\overrightarrow{OD}=\vec{0} $;
2. $\overrightarrow{MA}+\overrightarrow{MB}+\overrightarrow{MC}+\overrightarrow{MD}=4\overrightarrow{MO}$.

**Ví dụ 6.** Cho tam giác $ ABC $ có $ M, N, P $ thuộc các đoạn $ AB,BC,CA $ sao cho $ AB=3AM,BC=3BN,AC=3CP. $ Chứng minh rằng: $ \overrightarrow{AN}+\overrightarrow{BP}+\overrightarrow{CM}=\vec{0}. $

**Ví dụ 7.** Cho hình bình hành $ABCD$ tâm $ O. $ Chứng minh rằng
$$
 \overrightarrow{BD}-\overrightarrow{BA}=\overrightarrow{OC}-\overrightarrow{OB}, \overrightarrow{BC}-\overrightarrow{BD}+\overrightarrow{BA}=\vec{0}. 
$$
**Ví dụ 8.** Cho tam giác $ ABC $ với $ G $ là trọng tâm. Gọi $ B' $ đối xứng với $ B $ qua $ G,G' $ đối xứng với $ G $ qua $ B $ và $ M $ là trung điểm $ BC. $ Chứng minh rằng: 


1. $ \overrightarrow{AB'}=\frac{2}{3} \overrightarrow{AC}-\frac{1}{3}\overrightarrow{AB}$,
2. $	\overrightarrow{CB'}=-\frac{1}{3}(\overrightarrow{AB}+ \overrightarrow{AC}),$
3. $ \overrightarrow{MB'}=\frac{1}{6} \overrightarrow{AC}-\frac{5}{6}\overrightarrow{AB} $;
4. $ \overrightarrow{G'A}-5\overrightarrow{G'B}+\overrightarrow{G'C}=\vec{0}. $


**Hướng dẫn.**

- Gọi $ N $ là trung điểm $ AC. $ Ta có 
  $$
   \overrightarrow{AB'}=\overrightarrow{AG}+\overrightarrow{GB'}=\frac{2}{3}\overrightarrow{AM}+\overrightarrow{BG}=\frac{2}{3}(\overrightarrow{AM}+\overrightarrow{BN}). 
  $$
  Mà $ 2\overrightarrow{AM}=\overrightarrow{AB}+ \overrightarrow{AC},2\overrightarrow{BN}=\overrightarrow{BA}+\overrightarrow{BC} $ nên 
  $$
   \overrightarrow{AB'}=\frac{2}{3} \overrightarrow{AC}-\frac{1}{3}\overrightarrow{AB}. 
  $$
  Tương tự có 
  $$
   \overrightarrow{CB'}=-\frac{1}{3}(\overrightarrow{AB}+ \overrightarrow{AC}).
  $$
  Có $ \overrightarrow{MB'}=\overrightarrow{MG}+\overrightarrow{GB'}=-\frac{1}{2}\overrightarrow{AG}+\overrightarrow{BG}=-\frac{1}{3}\overrightarrow{AM}+\frac{2}{3}\overrightarrow{BN}=\frac{1}{6} \overrightarrow{AC}-\frac{5}{6}\overrightarrow{AB}.   $
- Ta có 
  $$
   \overrightarrow{G'A}+\overrightarrow{G'C}=2\overrightarrow{G'N}=2(\overrightarrow{G'B}+\overrightarrow{BN})=\frac{10}{3}\overrightarrow{BN} 
  $$
  Mà $ \overrightarrow{G'B}=\overrightarrow{BG}=\frac{2}{3}\overrightarrow{BN} \Rightarrow 5\overrightarrow{G'B}=\frac{10}{3}\overrightarrow{BN}. $ Từ đó suy ra điều phải chứng minh.

## 3. Điều kiện hai véctơ cùng phương, ba điểm thẳng hàng

- Điều kiện cần và đủ để hai véctơ $ \vec{a} $ và $ \vec{b}\, (\vec{b} \ne \vec{0}) $ cùng phương là có một số thực $ k $ để $ \vec{a} = k \vec{b}. $
- Điều kiện cần và đủ để ba điểm $ A,B,C $ thẳng hàng là có một số thực $ k $ để $ \overrightarrow{AB} =k \overrightarrow{AC}. $

**Ví dụ 9.** Tam giác $OAB $ có $ M $ thuộc cạnh $ AB $ sao cho $ AM= \frac{3}{4} AB $. Qua $ M $ kẻ các đường thẳng song song với $ OB $, $OA $ cắt $ OB, OA $ lần lượt
tại $ K,H $. Đặt $ \overrightarrow{OA} = \vec{a}, \overrightarrow{OB} = \vec{b} $.

1. Biểu thị $ \overrightarrow{OH}  $ theo $ \vec{a} $ và $ \overrightarrow{OK}  $ theo $ \vec{b} $.
2. Biểu thị $ \overrightarrow{OM} $ theo $ \vec{a} $ và $ \vec{b} $.

**Ví dụ 10.** Tam giác $ABC$ có $M$ trên cạnh $BC$ sao cho $MB=2MC$. Biểu thị $\overrightarrow{AM}$ theo hai véctơ $\overrightarrow{AB}, \overrightarrow{AC}$.

**Hướng dẫn.** Ta có 
$$
\overrightarrow{AM}&=\overrightarrow{AB}+\overrightarrow{BM}=\overrightarrow{AB}+\frac{2}{3}\overrightarrow{BC}=\overrightarrow{AB}+\frac{2}{3}(\overrightarrow{AC}-\overrightarrow{AB})\\
&=\frac{1}{3}\overrightarrow{AB}+\frac{2}{3}\overrightarrow{AC}=\frac{1}{3}\overrightarrow{u}+\frac{2}{3}\overrightarrow{v}
$$
**Ví dụ 11.** Cho tam giác $ABC $ có $ I $ thuộc cạnh $ BC $ sao cho $ 2CI= 3BI $,  $ J $ thuộc tia $ BC $ sao cho $ 5JB = 2JC $.

1. Biểu thị $ \overrightarrow{AI}, \overrightarrow{AJ} $ theo $ \overrightarrow{AB}, \overrightarrow{AC} $;
2. $ G $ là trọng tâm  $\Delta ABC$, biểu thị $ \overrightarrow{AG} $ theo $ \overrightarrow{AI}, \overrightarrow{AJ}. $

**Ví dụ 12.** Cho tam giác $ ABC $, gọi $ I $ là điểm trên $ BC $ kéo dài sao cho $ IB=3IC. $

1. Tính véctơ $ \overrightarrow{AI} $ theo các véctơ $ \overrightarrow{AB}, \overrightarrow{AC}. $
2. Gọi $ J,K $ là những điểm trên cạnh $ AC,AB $ sao cho $ \overrightarrow{JA}=2\overrightarrow{JC} $ và $ \overrightarrow{KB}=-3\overrightarrow{KA}. $ Tính $ \overrightarrow{JK}  $  theo $ \overrightarrow{AB}  $ và $ \overrightarrow{AC}.$ 
3. Tính $ \overrightarrow{ BC} $ theo $ \overrightarrow{ AI} $ và $ \overrightarrow{ JK}. $

**Hướng dẫn.** 

1. Có $ \overrightarrow{ IB}=3 \overrightarrow{ IC} \Leftrightarrow \overrightarrow{ AB}-\overrightarrow{ AI}=3(\overrightarrow{ AC}-\overrightarrow{ AI}) \Leftrightarrow \overrightarrow{ AI}=\frac{3}{2}\overrightarrow{ AC}-\frac{1}{2} \overrightarrow{ AB}.$
2. Chỉ ra $ \overrightarrow{ AJ}=\frac{2}{3}\overrightarrow{AC} $ và $ \overrightarrow{AK}=\frac{1}{4}\overrightarrow{AB}. $ Do đó $ \overrightarrow{AK}=\frac{1}{4}\overrightarrow{AB}-\frac{2}{3}\overrightarrow{AC}. $
3. Ta có $ \begin{cases} \overrightarrow{ AI}=\frac{3}{2}\overrightarrow{ AC}-\frac{1}{2} \overrightarrow{ AB}\\ \overrightarrow{AK}=\frac{1}{4}\overrightarrow{AB}-\frac{2}{3}\overrightarrow{AC}\end{cases}  \Leftrightarrow \begin{cases} 6\overrightarrow{AI}=9 \overrightarrow{AC}-3\overrightarrow{AB}\\12\overrightarrow{JK}=3\overrightarrow{AB}-8 \overrightarrow{AC}\end{cases}  
  \Leftrightarrow \begin{cases} \overrightarrow{AB}=6\overrightarrow{AI}+12\overrightarrow{JK}\\  \overrightarrow{AC}=16\overrightarrow{AI}+36\overrightarrow{JK}\end{cases} $

Trừ từng vế được $ \overrightarrow{BC}= \overrightarrow{AC}-\overrightarrow{AB}=-10\overrightarrow{AI}-24\overrightarrow{JK}. $

**Ví dụ 13.** Cho tam giác $ABC$ có $ D,E,F $ lần lượt là chân đường phân giác trong kẻ từ $ A,B,C $. Hãy phân tích véctơ $ AD $ theo hai véctơ $ AB,AC. $ Chứng minh rằng nếu có $ \overrightarrow{AD}+\overrightarrow{BE}+\overrightarrow{DF}=\vec{0}  $ thì tam giác $ABC$ đều.

**Ví dụ 14.** Cho tam giác $ ABC $, hãy dựng các điểm $ I,J,K,L $ biết rằng


1. $ \overrightarrow{IA}-2\overrightarrow{IB}=\vec{0}. $
2. $ \overrightarrow{JA}-\overrightarrow{JB}-2\overrightarrow{JC}=\vec{0}. $
3. $ \overrightarrow{KA}+\overrightarrow{KB}+\overrightarrow{KC}=\overrightarrow{BC}. $
4. $ 2\overrightarrow{LA}-\overrightarrow{LB}+3\overrightarrow{LC}=\overrightarrow{AB}+ \overrightarrow{AC}. $


**Hướng dẫn.**

1. $ \overrightarrow{IA}-2\overrightarrow{IB}=\vec{0} \Leftrightarrow \overrightarrow{AI}=2\overrightarrow{AB}. $ Vậy $ I $ là điểm đối xứng của điểm $ A $ qua $ B. $
2. $ \overrightarrow{JA}-\overrightarrow{JB}-2\overrightarrow{JC}=\vec{0} \Leftrightarrow \overrightarrow{CJ}=\frac{1}{2}\overrightarrow{AB}. $
3. Gọi $ G $ là trọng tâm tam giác $ ABC $ thì $ \overrightarrow{KA}+\overrightarrow{KB}+\overrightarrow{KC}=3\overrightarrow{KG}. $ Do đó $ \overrightarrow{GK}=\frac{1}{3}\overrightarrow{CB}. $
4. $ 2\overrightarrow{LA}-\overrightarrow{LB}+3\overrightarrow{LC}=\overrightarrow{AB}+ \overrightarrow{AC} \Leftrightarrow 4\overrightarrow{AL}=2 \overrightarrow{AC}-2\overrightarrow{AB} \Leftrightarrow \overrightarrow{AL}=\frac{1}{2}\overrightarrow{BC}. $

**Ví dụ 15.** Cho tam giác $ ABC $ và một điểm $M$ thỏa mãn $ \overrightarrow{BM}=k\overrightarrow{BC}. $ Chứng minh rằng
$$
 \overrightarrow{AM}=(1-k)\overrightarrow{AB}+k\overrightarrow{AC}. 
$$
**Hướng dẫn.** Ta có
$$
 \overrightarrow{BM}=k\overrightarrow{BC} \Leftrightarrow \overrightarrow{AM}-\overrightarrow{AB}=k(\overrightarrow{AC}-\overrightarrow{AB}) \Leftrightarrow \overrightarrow{AM}=(1-k)\overrightarrow{AB}+k\overrightarrow{AC}.
$$
 

**Ví dụ 16.** Cho hai điểm $ A,B $ và hai số $ \alpha,\beta $ thỏa mãn $ \alpha+\beta\ne0 $.

1. Chứng minh rằng tồn tại duy nhất điểm $ I $ thỏa mãn $ \alpha \overrightarrow{IA}+\beta \overrightarrow{IB}=\vec{0}  $
2. Với $ M $ là điểm bất kì thì $ \alpha \overrightarrow{MA}+\beta \overrightarrow{MB}=(\alpha+\beta)\overrightarrow{MI}  $

**Hướng dẫn.**

1. Ta có 
  $$
   \alpha \overrightarrow{IA}+\beta \overrightarrow{IB}=\vec{0}  \Leftrightarrow \alpha \overrightarrow{IA}+\beta (\overrightarrow{IA}+\overrightarrow{AB})=\vec{0} \Leftrightarrow \overrightarrow{AI}=\frac{\beta}{\alpha+\beta}\overrightarrow{AB}
  $$
  Do $ A,B $ cố định và hai số $ \alpha,\beta $ không đổi nên véctơ $ \frac{\beta}{\alpha+\beta}\overrightarrow{AB} $ không đổi. Vậy tồn tại duy nhất điểm $ I $ thỏa mãn $ \alpha \overrightarrow{IA}+\beta \overrightarrow{IB}=\vec{0}.$
2. Ta có
   $$
    \alpha \overrightarrow{MA}+\beta \overrightarrow{MB}=\alpha(\overrightarrow{MI}+\overrightarrow{IA})+\beta(\overrightarrow{MI}+\overrightarrow{IB})=(\alpha+\beta)\overrightarrow{MI} +\alpha \overrightarrow{IA}+\beta \overrightarrow{IB}=(\alpha+\beta)\overrightarrow{MI}. 
   $$
   



**Ví dụ 17.** Cho hình bình hành $ABCD$ và điểm $M$ tùy ý. Hãy tìm số $ k $ và điểm điểm $ I $ cố định sao cho các đẳng thức sao thỏa mãn với mọi điểm $M$.


1. $ \overrightarrow{MA}+\overrightarrow{MB}+\overrightarrow{MC}+3\overrightarrow{MD}=k\overrightarrow{MI} $
2. $  \overrightarrow{MA}+2 \overrightarrow{MB}=k \overrightarrow{MI} $
3. $  2\overrightarrow{MA}+ \overrightarrow{MB}- \overrightarrow{MC}=k \overrightarrow{MI} $


**Hướng dẫn.**

1. Gọi điểm $G$ là trọng tâm tam giác $ ABC $, thì $  \overrightarrow{MA}+ \overrightarrow{MB}+ \overrightarrow{MC}=3 \overrightarrow{MG}. $ Suy ra 
  $$ \overrightarrow{MA}+\overrightarrow{MB}+\overrightarrow{MC}+3\overrightarrow{MD}=3( \overrightarrow{MG}+ \overrightarrow{MD})=6\overrightarrow{MI} $$
  trong đó $I$ là trung điểm của $ GD. $
2. Gọi $I$ là điểm thỏa mãn $  \overrightarrow{IA}+2 \overrightarrow{IB}=\vec{0} \Leftrightarrow \overrightarrow{AI}=\frac{2}{3}\overrightarrow{AB}. $	Khi đó $  \overrightarrow{MA}+2 \overrightarrow{MB}=( \overrightarrow{MI}+ \overrightarrow{IA})+2(\overrightarrow{MI}+\overrightarrow{IB})=3\overrightarrow{MI} $
3. Gọi $I$ là điểm thỏa mãn $  2\overrightarrow{IA}+\overrightarrow{IB}-\overrightarrow{IC}=\vec{0} \Leftrightarrow 2\overrightarrow{IA}+\overrightarrow{CB}=\vec{0} \Leftrightarrow \overrightarrow{AI}=\frac{1}{2}\overrightarrow{CB}. $\\
  Khi đó $  2\overrightarrow{MA}+ \overrightarrow{MB}- \overrightarrow{MC}=...=2 \overrightarrow{MI} $

**Ví dụ 18.** Cho hình bình hành $ ABCD. $ Gọi $ I $ là trung điểm của $ CD. $ Lấy điểm $ M $ trên đoạn $ BI $ sao cho $ BM = 2MI. $ Chứnh minh ba điểm $ A,M,C $ thẳng hàng.

**Hướng dẫn.**
Từ giả thiết có $ \overrightarrow{BM}=2\overrightarrow{MI} $ nên $ \overrightarrow{AM}-\overrightarrow{AB}=2(\overrightarrow{AI}-\overrightarrow{AM}) \Rightarrow \overrightarrow{AM}=2\overrightarrow{AI}+\overrightarrow{AB}. $

Mà $ 2\overrightarrow{AI}= \overrightarrow{AC}+\overrightarrow{AD}  $ nên $ 3\overrightarrow{AM}= \overrightarrow{AC}+\overrightarrow{AD}+\overrightarrow{AB}=2 \overrightarrow{AC}. $ Điều này chứng tỏ $ A,M,C $ thẳng hàng.

**Ví dụ 19.** Cho tam giác $ ABC $ và $ I $ là trung điểm của $ BC. $ Tìm tập hợp các điểm $ M $ thỏa mãn 
$$
 |2\overrightarrow{MA}|=|\overrightarrow{MB}+\overrightarrow{MC}| 
$$
**Hướng dẫn.**
Vì $ I $ là trung điểm của $ BC $ nên $ \overrightarrow{MB}+\overrightarrow{MC}=2\overrightarrow{MI} $ nên
$$
 |2\overrightarrow{MA}|=|\overrightarrow{MB}+\overrightarrow{MC}| \Leftrightarrow |2\overrightarrow{MA}|=|2\overrightarrow{MI}| \Leftrightarrow MA=MI
$$
Vậy tập hợp các điểm $ M $ là đường trung trực của $ AI. $

**Ví dụ 20.** Tìm $ C $ thuộc đoạn $ AB $ sao cho $ \overrightarrow{CA}-2 \overrightarrow{CB}=\vec{0}. $

**Hướng dẫn.** Có $ \overrightarrow{CA}-2 \overrightarrow{CB}=\vec{0} \Leftrightarrow \overrightarrow{BA}=\overrightarrow{CB}, $ hay $ B $ là trung điểm của $ AC. $ 
$$
 \overrightarrow{MN}=\overrightarrow{MA}-2 \overrightarrow{MB}=\overrightarrow{MC}+\overrightarrow{CA}-2(\overrightarrow{MC}+\overrightarrow{CB})=-\overrightarrow{MC}. 
$$
Vậy $ M,N,C $ thẳng hàng hay đường thẳng $ MN $ luôn đi qua điểm $(C)$ cố định.

**Ví dụ 21.** Cho điểm $ M $ bất kỳ trong mặt phẳng và gọi $ \overrightarrow{MN} $ là véctơ định bởi $ \overrightarrow{MN}=\overrightarrow{MA}-2 \overrightarrow{MB}. $ Chứng tỏ đường thẳng $ MN $ luôn đi qua một điểm cố định.

**Ví dụ 22.** Cho tứ giác $ABCD$ có hai điểm $ M,N $ thay đổi trên cạnh $AB,CD$ sao cho $ \frac{AM}{AB}=\frac{CN}{CD}. $ Tìm quỹ tích trung điểm $ I $ của $ MN $.

**Hướng dẫn.** 
Theo giả thiết có $ \overrightarrow{AM}=k\overrightarrow{AB}, \overrightarrow{CN}=k\overrightarrow{CD}. $ với $ 0\le k\le1. $

Gọi $ P,Q $ lần lượt là trung điểm của $ AC,BD $ thì
$$
\overrightarrow{PI}&=\frac{1}{2}(\overrightarrow{AM}+\overrightarrow{CN})=\frac{1}{2}k(\overrightarrow{AB}+\overrightarrow{CD})\\
\overrightarrow{PQ}&=\frac{1}{2}(\overrightarrow{AB}+\overrightarrow{CD})
$$
Suy ra $ \overrightarrow{PI}=k\overrightarrow{PQ} $ hay $ P,I,Q $ thẳng hàng. Mà  $ 0\le k\le1 $ nên $ I $ thuộc đoạn $ PQ. $

Vậy tập hợp các trung điểm của đoạn $ MN $ là đoạn $ PQ. $

**Ví dụ 23.** Cho tam giác $ ABC $ có $ M $ là một điểm di động trên cạnh $ BC. $ Kẻ $ MP,MQ $ lần lượt song song với $ AC,AB $ và cắt $ AB,AC $ tại $ P,Q. $ Dựng cách hình bình hành $ BMPR $ và $ CMQS. $ Tìm quỹ tích trung điểm $ I $ của $ RS. $

**Hướng dẫn.** Ta có 
$$
\overrightarrow{AR}&=\overrightarrow{AB}+\overrightarrow{AP}-\overrightarrow{AM}\\
\overrightarrow{AS}&=\overrightarrow{AC}+\overrightarrow{AQ}-\overrightarrow{AM}
$$
Nên $ 2\overrightarrow{AI}=\overrightarrow{AR}+\overrightarrow{AS}=\overrightarrow{AB}+ \overrightarrow{AC}-\overrightarrow{AM}. $

Vì $ M $ thuộc đoạn $ BC $ nên $ \overrightarrow{AM}=k\overrightarrow{AB}+(1-k) \overrightarrow{AC}  $ với $ k\in [0,1]. $ Do đó $ \overrightarrow{AI}=(1-k)\frac{1}{2}\overrightarrow{AB}+\frac{1}{2} \overrightarrow{AC}=(1-k)\overrightarrow{AE}+k\overrightarrow{AF} $ với $ E,F $ là trung điểm $ AB,AC. $
Suy ra $ I $ thuộc đoạn $ EF.$