
#### Learning objectives

- Understand the concepts of latency and bandwidth
- Be able to estimate data transfer time through a network link

---

#### Link Latency and Bandwidth

A network is built from **network links** (in the case of wired
networks, these links are network cables). 
Each network link has two important characteristics:

  1. **Latency**: the time it takes for one bit of data to travel along the length of the link (measured in second)
  2. **Bandwidth**: the maximum number of bits that can be transferred by the link per time unit (measured in bit/second)

<div class="ui accordion fluid">
  <div class="title">
    <i class="dropdown icon"></i>
    One can think of data flowing through a link as water flowing
through a pipe (click to expand)
  </div>
  <div markdown="1" class="ui segment content answer-frame">
A popular analogy is to think of a link as a vertical physical pipe
that connects a cistern  (on top) to a pool (on the bottom) .  The
latency is the time for one drop of water to travel from the top-end of
the pipe to the other. The bandwidth is how many liters of water can
flow out of the end of the pipe per second.  In this analogy, the
latency is the _length_ of the pipe, and the bandwidth is its _width_.
</div>
</div>

<p> </p>

We assume that links are **bidirectional**, meaning that data can flow in
both directions at the same time (which is unlike water in pipes).  This
model of a network link is not completely accurate as it abstracts away
many of the details of actual network technologies and protocols.  But it
is sufficient for our purpose.

---

#### Data Transfer Time

Given a network link with latency $\alpha$ and bandwidth $\beta$, the time
$T$ to transfer an amount of data $s$ over the link can be estimated as a first
approximation as follows:

$$ T = \alpha + \frac{s}{\beta} .$$

For instance, consider a link with latency 100 microseconds and effective bandwidth
120 MB/sec ("120 MegaBytes per second"), transferring 100KiB ("100 KibiBytes per 
second") of data takes time: 

$$ T = 100 \times 10^{-6} + \frac{100 \times 2^{10}}{120 \times 10^{6}}  \simeq .000953 \; \text{sec}.$$

Make sure you know your units and use them in a consistent manner, knowing when 
units are powers of 10 or powers of 2. In these pedagogic modules, we typically 
use power-of-10 units (e.g., KB rather than KiB). 

In some cases the first term above (the latency) can dominate (i.e., with
small data sizes and/or large bandwidths), or can be negligible (i.e., with
large data sizes and/or small bandwidths).

Here we have used the term, *effective bandwidth*, to denote the maximum
*possible* data transfer rate that a network link is able to achieve. Due to
various network overheads, a network link can have a throughput of at most
about 97% of its advertised physical bandwidth. Thus, if you purchase a 100
GB/sec physical link, you will not be able to transfer data at 100 GB/sec.
From this point forward, when we describe the bandwidth of a network link,
we will always mean its *effective bandwidth*.

---

#### Practice Questions

To make sure the above is crystal clear, answer the following practice questions:

**[A.3.1.p1.1]** How long, in milliseconds, does it take to transfer 250 MB on a network link with latency 500 microseconds and 20 GB/sec bandwidth?
<div class="ui accordion fluid">
  <div class="title">
    <i class="dropdown icon"></i>
    (click to see answer)
  </div>
  <div markdown="1" class="ui segment content answer-frame">
   $$ T = 500 / 1000 + 1000 \times (250 \times 10^6) / (20 \times 10^9) = 13 \; \text{ms}.$$
  </div>
</div>

<p> </p>

**[A.3.1.p1.2]** How long, in minutes, does it take to transfer 1 GB on a network link with latency 100 microseconds and 520 MB/sec bandwidth?
<div class="ui accordion fluid">
  <div class=" title">
    <i class="dropdown icon"></i>
    (click to see answer)
  </div>
  <div markdown="1" class="ui segment content answer-frame">
   $$ T = 100 / (60 \times 10^6) + (1 / 60 ) \times (1 \times 10^9) / (520 \times 10^6) \simeq 0.032 \; \text{min} .$$
  </div>
</div>

<p> </p>

**[A.3.1.p1.3]** You need to transfer 148 MB of data through a network link with latency 1 ms. What bandwidth, in GB/sec, should the link have so that the data transfer takes 2.5 sec?
<div class="ui accordion fluid">
  <div class=" title">
    <i class="dropdown icon"></i>
    (click to see answer)
  </div>
  <div markdown="1" class="ui segment content answer-frame">
   Let $B$ be the needed bandwidth. We simply need to solve the equation below for $B$:  
<p>$$ 1/1000  + (148 / 10^3) / B  = 2.5 ,$$</p>
   which gives:
<p>$$ B = (148 / 10^3) / (2.5 - 1/1000) \simeq .059 \; \text{GB/sec} .$$</p>

  </div>
</div>

---

#### Questions

**[A.3.1.q1.1]** How long, in seconds, does it take to transfer 12 GB of data
over a link with latency 10 ms and bandwidth 500 MB/sec?

<p> </p>

**[A.3.1.q1.2]** 3 MB of data was transferred over a link with 18 MB/sec
bandwidth in 3.03 sec. What is the link's latency in seconds?

<p> </p>

**[A.3.1.q1.3]** A data transfer took 14 minutes on a link with 
latency 100 ms and bandwidth 120 KB/sec. How much data, in MB, was transferred?

<p> </p>

**[A.3.1.q1.4]** Say you are sitting at your computer and need to download a 10
GB movie file. The file is available at two mirror sites, both of them one
network link away from your computer.  Mirror *A* is connected to your
computer by a link with latency 100 ms and bandwidth 400 MB/sec.  Mirror
*B* is connected to your computer by a link with latency 300 ms and
bandwidth 700 MB/sec.  Which mirror should you use and why?

<p> </p>

---

#### Suggested Activities

**[Latencies]** What do you think the network latency is between major U.S. cities? Go to
[this site](https://ipnetwork.bgtmo.ip.att.net/pws/network_delay.html) and find out the 
current network latency between Houston and Seattle and the current latency between New 
York and Philadephia. Which two U.S. cities (among those on that site) are the furthest 
apart in terms of network latencies? 

**[Latencies and speed of light]** Assuming that data travels at the speed of light, 
in a straight line, what would be the network latency between New York and Los Angeles?  
How much bigger is it in reality (using the same site as in the previous activity)?

**[Bandwidth]** Download a large file from some Web site and measure the (perceived) 
bandwidth that you achieved. For instance, you can download the 100 MB file on 
[this site](https://speed.hetzner.de/). Note that tools (other than Web browsers) are 
available to download files from URLs that print out download times and/or data transfer 
rates (e.g., `wget` on Linux).
