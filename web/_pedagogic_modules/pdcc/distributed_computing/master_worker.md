---
layout: page
title: 'A.3 Master Worker'
order: 133
usemathjax: true
submodule: 'distributed_computing'
---



The goal of this module is to introduce you to the basic concepts of running tasks
on a master/worker system.


#### Learning Objectives:

  - Understand master/worker systems

  - Encounter and understand different scheduling philosophies

----



## Basics

When hosts or clusters are referred to as a master or a worker the meaning is reminiscent
of any other area of life. The single master or boss is
 assigning labor amongst an arbitrary number of workers. This allows the workers to be
 simple laborers that do the jobs given to them without worrying about the larger picture,
 and the master is not doing the actual work so they can focus on the larger picture
 working smoothly and efficiently. The success of a master/worker system is predicated on the ability of the
  master to efficiently offload work. This distribution of work is known as scheduling, and there are
  many methodologies to consider when deciding how it should be implemented on the master.


### Parallelism through Master / Worker

Master/Worker can allow for parallel computing in much the same ways as we have previously discussed.
Instead of delegating an entire task to each host or core, the master can evaluate the workload
and hand off pieces of computation to workers. The worker does the computation as necessary, and returns
 the output to the master when it is finished, signalling that it has completed the assigned work. Once
 a worker is free it can be assigned work again.

 How workload is delegated will depend on that workload and dependencies within it. In a real situation,
 there would also be financial and contractual considerations. A single Master/worker cluster may be
 used by multiple companies or researchers, and those parties will be paying for or assigned a certain level of access.
 This can result in making choices for fairness or financial prudence over efficiency and speed.


### Scheduling  Philosophies In Master / Worker

You may be familiar with the concept of scheduling for a single processor. In discussions of scheduling on a single
machine where decisions must be made very quickly and efficiently, complex scheduling is not realistic. Your time spent
trying to calculate the most efficient scheduling of tasks takes longer than the gains, or unexpected I/O takes
precedence and necessitates frequent recalculations. When dealing
with large computational workloads the gains from trying more complex scheduling can have a larger payoff.
Scheduling efficiently may cut minutes or hours off of the computation time needed. You don't
have to account for the possibility of unexpected I/O, and workloads can be submitted with an estimate of computation
time and resources needed. For scheduling, having that additional information and payoff is a game changer.

When scheduling you have two major pieces in consideration, the workload or task and the worker that will be assigned
that job. You can have a methodology for choosing which task or tasks get executed first and a separate methodology for
which worker that task is assigned to.

In the simulation below we have implemented a number of different methodologies for scheduling each of these components.
Specifically they are:

Task Selection:
    - random (default)
    - highest flop
    - lowest flop
    - highest bytes
    - lowest bytes
    - highest flop/bytes
    - lowest flop/bytes
Worker Selection:
    - random (default)
    - fastest worker
    - best connected worker
    - largest compute time/io time ratio
    - earliest completion

These different options can be selected discretely.

### Simulating Master / Worker

<div class="ui accordion fluid app-ins">
  <div class="title">
    <i class="dropdown icon"></i>
    (Open simulator here)
  </div>
  <div markdown="0" class="ui segment content sim-frame">
    {% include simulator.html src="master_worker/" %}
  </div>
</div>




#### Practice Questions

[] Consider that you have three workers (Worker #1, Worker #2, Worker #3) with 10 GF/s, 100 GF/s and 1000 GF/s single-core processors respectively.
All workers are connected to the master by their own 100 MBps link. You must delegate a workload that consists of four
independent tasks (they can be executed in any order). The tasks are as follows:

Task #1
Input: 100 MB
Computation: 10 GF
Output: 100 MB

Task #2
Input: 100 MB
Computation: 1000 GF
Output: 100 MB

Task #3
Input: 1 GB
Computation: 1000 GF
Output: 1 GB

Task #4
Input: 1 GB
Computation: 1000 GF
Output: 1 GB

If the tasks are assigned to workers in the order that both are numbered (Task #1 goes to Worker #1, Task #2 to Worker #2,
 Task #3 to Worker #3 and Task #4 to the first worker available) what will the total execution time be? What is one
 example of intelligent scheduling that could improve on this execution time? Verify your answers using the simulator.


#### Questions
