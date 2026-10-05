// Edit this list to update the Publications section.
// type: "journal" | "conference" | "chapter". note: optional badge text.
const PUBS = [
  {
    year: 2026,
    type: "conference",
    note: "Accepted",
    title: "Federated Learning for Distributed CNC Tool Wear Prediction",
    authors: "<b>A. Khan</b>, M. Stallmann, M. Pietrasik, C. Kouzinopoulos, A. Wilbik.",
    venue: "28th International Symposium on Stabilization, Safety, and Security of Distributed Systems",
    abstract: "Tool wear prediction is an important task in CNC machining, where accurate monitoring of tool condition supports product quality and process reliability. Machine learning methods have shown potential for this task, but their use in industrial environments is limited by the distributed nature of machining data and by restrictions on data sharing between machines, sites, or organizations. Federated learning offers a suitable framework for this setting by enabling collaborative model training without transferring raw operational data. However, it is open if federated learning can lead to accuracy gains in CNC tool wear prediction that justify the increased complexity of such a system. In this experimental study, real tool trajectories are distributed across simulated clients to represent a federated learning scenario. The federated models are compared against centralized references and local client baselines. Results show that federated learning achieves performance close to centralized learning and improves significantly over local client models. These findings indicate that federated learning can support collaborative tool wear prediction in distributed CNC manufacturing environments and the increased complexity is justified.",
    links: {pdf: "https://arxiv.org/pdf/2608.11281.pdf"}
  },
  {
    year: 2026,
    type: "conference",
    note: "Accepted",
    title: "HybridFL: A Federated Learning Approach for Financial Crime Detection",
    authors: "<b>A. Khan</b>, M. ten Thij, G. Tang, A. Wilbik.",
    venue: "4th International Conference on Federated Learning Technologies and Applications (FLTA)",
    abstract: "Federated learning (FL) is a privacy-preserving machine learning paradigm that enables multiple parties to collaboratively train models on privately owned data without sharing raw information. While standard FL typically addresses either horizontal or vertical data partitions, many real-world scenarios exhibit a complex hybrid distribution. This paper proposes Hybrid Federated Learning (HybridFL) to address data split both horizontally across disjoint users and vertically across complementary feature sets. We evaluate HybridFL in a financial crime detection context, where a transaction party holds transaction-level attributes and multiple banks maintain private account-level features. By integrating horizontal aggregation and vertical feature fusion, the proposed architecture enables joint learning while strictly preserving data locality. Experiments on AMLSim and SWIFT datasets demonstrate that HybridFL significantly outperforms the transaction-only local model and achieves performance comparable to a centralized benchmark.",
    links: {pdf: "https://arxiv.org/pdf/2602.19207.pdf"}
  },
  {
    year: 2026,
    type: "chapter",
    title: "Fair Incentive Allocation in Vertical Federated Learning Using Nucleolus",
    authors: "<b>A. Khan</b>, M. ten Thij, G. Tang, F. Thuijsman, A. Wilbik.",
    venue: "Learning-Driven Game Theory for AI, Elsevier",
    abstract: "Federated learning (FL) enables collaborative model training on decentralized data, overcoming privacy barriers that prevent direct sharing. Vertical federated learning (VFL) is an FL setting where different parties hold distinct features of the same users and jointly train machine learning models without sharing raw data. In this setting, with one label-holding active party and multiple passive parties, an important challenge is how the active party can fairly reward the passive parties for their contributions. We address this problem by proposing NIAM (Nucleolus-based Incentive Allocation Mechanism), which frames incentive allocation as a bankruptcy game and computes the nucleolus efficiently through the Talmudic division rule, to distribute incentives. In NIAM, the total performance gain is treated as an “estate” and the marginal contribution of each passive party as an individual claim; the computed nucleolus is a unique payoff that balances these claims, ensuring fair and stable rewards. We evaluate NIAM on public benchmark datasets covering both regression and classification tasks and conclude that it produces allocations that satisfy fairness axioms like efficiency, symmetry, and null player. Additionally, we compare NIAM with existing VFL incentive mechanisms, which shows that it avoids excluding contributors by ensuring all positively contributing parties receive rewards, treats equally contributing parties the same, and provides a more equitable basis for long-term collaboration.",
    links: {}
  },
  {
    year: 2025,
    type: "journal",
    title: "Vertical Federated Learning: A Structured Literature Review",
    authors: "<b>A. Khan</b>, M. ten Thij, A. Wilbik.",
    venue: "Knowledge and Information Systems, Springer",
    abstract: "Federated learning (FL) has emerged as a promising distributed learning paradigm with an added advantage of data privacy. With the growing interest in collaboration among data owners, FL has gained significant attention from organizations. The idea of FL is to enable collaborating participants train machine learning (ML) models on decentralized data without breaching privacy. In simpler words, federated learning is the approach of “bringing the model to the data, instead of bringing the data to the model”. Federated learning, when applied to data which is partitioned vertically across participants, is able to build a complete ML model by combining local models trained only using the data with distinct features at the local sites. This architecture of FL is referred to as vertical federated learning (VFL), which differs from the conventional FL on horizontally partitioned data. As VFL is different from conventional FL, it comes with its own issues and challenges. Motivated by the comparatively less explored side of FL, this paper provides a comprehensive overview of existing methods and developments in VFL, covering various aspects such as communication, learning, privacy, and applications. We conclude by identifying gaps in the current literature and proposing potential future directions for research in VFL.",
    links: {}
  },
  {
    year: 2025,
    type: "conference",
    note: "Oral presentation",
    title: "VFL-RPS: Relevant Participant Selection in Vertical Federated Learning",
    authors: "<b>A. Khan</b>, M. ten Thij, G. Tang, A. Wilbik.",
    venue: "International Joint Conference on Neural Networks (IJCNN)",
    abstract: "Federated Learning (FL) allows collaboration between different parties, while ensuring that the data across these parties is not shared. However, not every collaboration is helpful in terms of the resulting model performance. Therefore, it is an important challenge to select the correct participants in a collaboration. As it currently stands, most of the efforts in participant selection in the literature have focused on Horizontal Federated Learning (HFL), which assumes that all features are the same across all participants, disregarding the possibility of different features across participants which is captured in Vertical Federated Learning (VFL). To close this gap in the literature, we propose a novel method VFL-RPS for participant selection in VFL, as a pre-training step. We have tested our method on several data sets performing both regression and classification tasks, showing that our method leads to comparable results as using data from all participants by only selecting a few participants. In addition, we show that our method outperforms existing methods.",
    links: {}
  },
  {
    year: 2024,
    type: "conference",
    note: "Best Paper Award",
    title: "Using the Nucleolus for Incentive Allocation in Vertical Federated Learning",
    authors: "<b>A. Khan</b>, M. ten Thij, F. Thuijsman, A. Wilbik.",
    venue: "2nd IEEE International Conference on Federated Learning Technologies and Applications (FLTA)",
    abstract: "Vertical federated learning (VFL) is a promising approach for collaboratively training machine learning models using private data partitioned vertically across different parties. Ideally in a VFL setting, the active party (party possessing features of samples with labels) benefits by improving its machine learning model through collaboration with some passive parties (parties possessing additional features of the same samples without labels) in a privacypreserving manner. However, motivating passive parties to participate in VFL can be challenging. In this paper, we focus on the problem of allocating incentives to the passive parties by the active party based on their contributions to the VFL process. We address this by formulating the incentive allocation problem as a bankruptcy game, a concept from cooperative game theory. Using the Talmudic division rule, which leads to the Nucleolus as its solution, we ensure a fair distribution of incentives. We evaluate our proposed method on synthetic and real-world datasets and show that it ensures fairness and stability in incentive allocation among passive parties who contribute their data to the federated model. Additionally, we compare our method to the existing solution of calculating Shapley values and show that our approach provides a more efficient solution with fewer computations.",
    links: {}
  },
  {
    year: 2022,
    type: "journal",
    title: "Communication-Efficient Vertical Federated Learning",
    authors: "<b>A. Khan</b>, M. ten Thij, A. Wilbik.",
    venue: "Algorithms 15(8), Article 273",
    abstract: "Federated learning (FL) is a privacy-preserving distributed learning approach that allows multiple parties to jointly build machine learning models without disclosing sensitive data. Although FL has solved the problem of collaboration without compromising privacy, it has a significant communication overhead due to the repetitive updating of models during training. Several studies have proposed communication-efficient FL approaches to address this issue, but adequate solutions are still lacking in cases where parties must deal with different data features, also referred to as vertical federated learning (VFL). In this paper, we propose a communication-efficient approach for VFL that compresses the local data of clients, and then aggregates the compressed data from all clients to build an ML model. Since local data are shared in compressed form, the privacy of these data is preserved. Experiments on publicly available benchmark datasets using our proposed method show that the final model obtained by aggregation of compressed data from clients outperforms the performance of the local models of the clients.",
    links: {}
  },
  {
    year: 2018,
    type: "conference",
    title: "An IoT-Based Intelligent Fire Evacuation System",
    authors: "<b>A. Khan</b>, A. Anzum, J. Sarker, S. Rahman, J. Rahman.",
    venue: "21st International Conference of Computer and Information Technology",
    abstract: "Nowadays fire accident in buildings has become a very common incident. As the structural design of modern buildings are complex and augmented, fire accident victims often find it difficult to identify a safe path to exit the building. As a result, they panic which causes more injuries and deaths. In this paper, we have proposed an IoT based intelligent fire evacuation system that will effectively guide people along an evacuation path in case of fire accidents. A* search algorithm has been used to control the central module of the proposed model. This will help people navigate out of danger by guiding through the shortest safe path possible. It shows the next best path if the first optimal path is already crowded. A grid based floor plan simulation both in software and hardware has been designed and implemented to accomplish the desired goal. For a real time, active, intelligent guidance system, here a wireless sensor network including sensors like PIR sensors, smokes sensors and heat sensors have been combined together. The system will not only help evacuees reach the exit but also automatically notify the fire brigade for rescue operation.",
    links: {}
  },
  {
    year: 2018,
    type: "conference",
    title: "A New Algorithmic Approach to Finding Minimum Spanning Tree",
    authors: "<b>A. Khan</b>, A. Anzum Aesha, J. Sarker.",
    venue: "1st IEEE International Conference on Electrical Engineering and ICT",
    abstract: "Spanning tree of a graph is formed when each and every vertex of a graph are connected having no cycles in them and therefore minimum spanning tree as its name refers, is the tree with the smallest possible length among all spanning trees. Calculating minimum spanning tree of a graph has always been a common problem throughout ages. A number of efficient algorithms has been already developed for this problem. In this paper a different approach has been proposed where we profusely used sets and disjoint sets union data structure for reducing the number of edges under consideration while determining minimum spanning tree of a graph.",
     links: { pdf: "https://ieeexplore.ieee.org/abstract/document/8628095" }
  }
];

