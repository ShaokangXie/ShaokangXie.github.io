---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

<!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. Suspendisse condimentum, libero vel tempus mattis, risus risus vulputate libero, elementum fermentum mi neque vel nisl. Maecenas facilisis maximus dignissim. Curabitur mattis vulputate dui, tincidunt varius libero luctus eu. Mauris mauris nulla, scelerisque eget massa id, tincidunt congue felis. Sed convallis tempor ipsum rhoncus viverra. Pellentesque nulla orci, accumsan volutpat fringilla vitae, maximus sit amet tortor. Aliquam ultricies odio ut volutpat scelerisque. Donec nisl nisl, porttitor vitae pharetra quis, fringilla sed mi. Fusce pretium dolor ut aliquam consequat. Cras volutpat, tellus accumsan mattis molestie, nisl lacus tempus massa, nec malesuada tortor leo vel quam. Aliquam vel ex consectetur, vehicula leo nec, efficitur eros. Donec convallis non urna quis feugiat.

My research interest includes neural machine translation and computer vision. I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>). -->
A undergraduate student from SUSTech...


# 🔥 News
- *2023.08*: &nbsp;🎉🎉 Paper *Byzantine Protocols with Asymptotically Optimal Communication Complexity* is accepted by EAI SecureComm.


# 📝 Publications 
<!-- - not yet
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2016</div><img src='images/500x300.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Deep Residual Learning for Image Recognition](https://openaccess.thecvf.com/content_cvpr_2016/papers/He_Deep_Residual_Learning_CVPR_2016_paper.pdf)

**Kaiming He**, Xiangyu Zhang, Shaoqing Ren, Jian Sun

[**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
</div>
</div> -->

- [Byzantine Protocols with Asymptotically Optimal Communication Complexity](https://securecomm.eai-conferences.org/2023/accepted-papers/), Hanzheng Lyu, **Shaokang Xie**, Jianyu Niu, Chen Feng, **Published on EAI SecureComm 2023**

- Cerberus: High-Performance and Secure Multi-BFT Consensus via Dynamic Global Ordering, (Co-first Author) **Target on EuroSys 2024 (Due at 10.16)**

- PHOENIX: Unburdening Multi-BFT Consensus from Expensive Global Ordering, (Co-first Author)  **Current on Review Process of InfoComm 2024**



# 📖 Educations
- *2020.09 - now*, Undergraduate, Computer Science and Technology, Southern University of Science and Technology, Shenzhen, China
- *2017.09 - 2020.07*, Senior high school, Shimen Middle School, Foshan, China 

# 📚 Research Projects
- *2022.04 - 2022.09*, Second author / **Byzantine Protocols with Asymptotically Optimal Communication Complexity**
  - With leveraging hash function, we propose a paradigm to reduce the communication complexity of normal BFT protocols.
- *2022.07 - 2023.07*, Co-first author / **Cerberus: High-Performance and Secure Multi-BFT Consensus**
  - Propose Cerberus, a high-performance and secure Multi-BFT protocol.
  - Considering varying block rates of instances, we use timestamp to dynamically order consensus results across instances.
- *2023.04 - 2023.08*, Co-first author / **PHOENIX: Unburdening Multi-BFT Consensus from Expensive Global Ordering**
  - Propose PHOENIX, which unburdens Multi-BFT consensus from expensive global ordering.
  - Considering transaction dependencies between instances, we deploy a transaction detecting and partitioning mechanism.
- *2022.09 - now*, Collaborator / **Confidential Blockchain**
  - Aim to enhance the security of blockchain technology by combining TEE with blockchain.
  - It can mitigate the security risks and enhance the overall security of the blockchain network.
- *2023.09 - now*, Leader / **BFT scaling based on TEE**
  - Explore the use of TEE, using both software and hardware methods, to bolster the scalability and security of BFT systems.
  - With leveraging TEE, we can elevate fault tolerance, decrease one consensus phrase, and enhance overall system security.



# 🎖 Honors and Awards
- *2020.09* Second-class Outstanding Freshman Scholarship
- *2021.09* First-class Outstanding Students Scholarship
- *2022.09* Third-class Outstanding Students Scholarship
- *2022.12* Third place in Xili Lake Financial Technology Challenge,  Blockchain track

