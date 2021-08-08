import TitleBar from "../../components/title-bar";

export default function Example() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-15 pb-10">
      <TitleBar subheading="Legal" title="Service Level Agreement" />
      <p className="mt-3">
        The SLA applicable to all Services delivered to Customers. This SLA does
        not apply to the availability of Third Party Services which are subject
        to the 3rd Party Legal Agreements. The SLA is binding only on the
        Customer and BlessHost and does not apply to any Third Parties,
        including Customer End Users or Friends. The issuance of SLA Credits
        (defined below) is the sole and exclusive remedy of Customer and
        BlessHost’s sole and exclusive obligation, for any failure by BlessHost
        to satisfy the requirements set forth in the SLA
      </p>
      <p className="mt-3">
        <strong className="leading-10 border-b text-lg">
          1 Standard Support
        </strong>
      </p>
      <p className="mt-3">
        <em>(Free Support)</em>&nbsp;which includes&nbsp;
        <em>(One Hour Per Month)</em>&nbsp;is defined as a basis for each
        customers basic support allotment, BlessHost is at right at all times to
        request payment if support faults are originated from the client and in
        no way shape or form fault of BlessHost.
      </p>
      <p className="mt-3">
        It is at BlessHost's discretion to provide support for software
        configuration or any form of custom coding / scripting under the free
        support allotment.
      </p>
      <p className="mt-3">
        <strong className="leading-10 border-b text-lg">
          1.1 Advanced Support
        </strong>
      </p>
      <p className="mt-3">
        <em>("Advanced Support")</em>&nbsp;is defined as advanced technical
        support for dedicated, virtual, gaming, voice and web hosting. This
        support can be used for any number of support services and includes
        server troubleshooting, software configuration, operating system
        configuration, operating system reinstalls, and any task that does not
        fall under the "free support" provided with the service. For various
        levels of support requirement a particular amount of time is provided
        and is at BlessHost's discretion whether it's chargeable or not.
      </p>
      <p className="mt-3">
        <strong className="leading-10 border-b text-lg">1.2 Network</strong>
      </p>
      <p className="mt-3">
        <em>("Network")</em>&nbsp;is defined as the equipment, software, and
        facilities within the BlessHost's infrastructure, including BlessHost's
        contracted connectivity services to which the BlessHost hosting
        environments are connected and are collectively utilized by BlessHost to
        provide dedicated, virtual, gaming, voice and web hosting services.
      </p>
      <p className="mt-3">
        <strong className="leading-10 border-b text-lg">
          1.3 Service Availability
        </strong>
      </p>
      <p className="mt-3">
        <em>("Service Availability")</em>&nbsp;is the total time in a calendar
        month that the BlessHost infrastructure is available through the
        Internet, provided that client has established connectivity. BlessHost
        takes responsibility for the service availability within its
        infrastructure, and cannot be held liable for problems directly related
        to an external bandwidth provider, hardware and or software fault.
      </p>
      <p className="mt-3">
        <strong className="leading-10 border-b text-lg">
          1.4 Service Downtime
        </strong>
      </p>
      <p className="mt-3">
        <em>("Service Downtime")</em>&nbsp;is any unplanned interruption in
        service availability during which the client is unable to access the
        services as described in preceding section 1.3, provided the
        interruption is determined to have been caused by a problem in the
        immediate BlessHost infrastructure as confirmed by BlessHost will
        measured as the total length of time of the unplanned interruption
        (complete outage) in service availability during a calendar month.
      </p>
      <p className="mt-3">
        <strong className="leading-10 border-b text-lg">
          1.5 Scheduled Service Downtime
        </strong>
      </p>
      <p className="mt-3">
        <em>("Scheduled Service Downtime")</em>&nbsp;is any scheduled
        interruption of service. Scheduled service downtime occurs during a
        BlessHost standard server maintenance window, which occurs in
        conjunction with a 1 hour notice to the client via electronic
        communication. In ("Advanced Support") downtime is coordinated with the
        client to the best of BlessHost abilities as to align the window of
        maintenance with the client’s explicit wishes.
      </p>
      <p className="mt-3">
        <strong className="leading-10 border-b text-lg">
          1.6 Performance Credit
        </strong>
      </p>
      <p className="mt-3">
        <em>("Performance Credit")</em>&nbsp;occurs when 100% uptime is not met.
        BlessHost will refund the customer 5% of the monthly fee for each 1 hour
        of downtime up to 100% of the clients monthly fee. Downtime is measured
        from the time a trouble ticket is opened by a customer to the time the
        service is once again available.
      </p>
      <p className="mt-3">
        Performance credit is completely at BlessHost's discretion and is only
        applicable if it's the direct fault of BlessHost. Performance credit is
        not included in the case of Server Attack of any type, Hardware Failure,
        Software Failure or any 3rd party failure.
      </p>
      <p className="mt-3">
        <strong className="leading-10 border-b text-lg">
          1.7 Monitoring Service
        </strong>
      </p>
      <p className="mt-3">
        <em>("Monitoring Service")</em>&nbsp;is the service BlessHost provides
        in order to analyze availability of services and applications through
        its internal monitoring system.
      </p>
      <p className="mt-3">
        <strong className="leading-10 border-b text-lg">
          2 Billable System Administration
        </strong>
      </p>
      <p className="mt-3">
        <em>("Billable System Administration")</em>&nbsp;is operation,
        configuration, performance tuning, security configurations, and any
        interaction with the operating system or software installed on the
        service in question.
      </p>
      <ul>
        <li>
          <p className="mt-3">
            Services have a specified amount of "free hours" support that are
            included. In the event these are exceeded billable system
            administrations will apply, based on approval from client and the
            discretion of BlessHost.
          </p>
        </li>
        <li>
          <p className="mt-3">System administration of the client's server.</p>
        </li>
        <li>
          <p className="mt-3">Software installations performed by BlessHost</p>
        </li>
        <li>
          <p className="mt-3">Virus and security scans of the server.</p>
        </li>
        <li>
          <p className="mt-3">
            Configuration of the operating system or services provided on the
            server.
          </p>
        </li>
        <li>
          <p className="mt-3">
            Security auditing and resource management &amp; efficiency of the
            server.
          </p>
        </li>
      </ul>
      <p className="mt-3">
        <strong className="leading-10 border-b text-lg">
          3 Service Exclusions.
        </strong>
      </p>
      <p className="mt-3">
        <em>3.1</em>&nbsp;This SLA does not cover service downtime caused by
        problems in the following:
      </p>
      <ul>
        <li>
          <p className="mt-3">Client's local area network.</p>
        </li>
        <li>
          <p className="mt-3">
            Client-provided Internet connectivity or end-user software.
          </p>
        </li>
        <li>
          <p className="mt-3">
            Entities inside client's internal network including, but not limited
            to, firewall configuration and bandwidth shaping, local area
            workstations, or other servers, equipment, and software that have a
            potential bearing on the local networking environment.
          </p>
        </li>
        <li>
          <p className="mt-3">Any predetermined scheduled service downtime.</p>
        </li>
        <li>
          <p className="mt-3">
            Any problems beyond the immediate BlessHost's infrastructure.
          </p>
        </li>
        <li>
          <p className="mt-3">
            Any interruptions, delays or failures caused by client or client's
            employees, agents, friends, or subcontractors, such as, but not
            limited to, the following:
          </p>
        </li>
        <li>
          <p className="mt-3">Inaccurate configuration.</p>
        </li>
        <li>
          <p className="mt-3">
            Non-compliant use of any software installed on the server.
          </p>
        </li>
        <li>
          <p className="mt-3">Client initiated server over-utilization.</p>
        </li>
        <li>
          <p className="mt-3">
            Any problems related to attacks on the machine such as hacking,
            bandwidth-based attacks of any nature, and service or operating
            system exploits.
          </p>
        </li>
        <li>
          <p className="mt-3">
            Problems associated with Operating System, Software, Applications
            and 3rd Party interactions.
          </p>
        </li>
      </ul>
      <p className="mt-3">
        <strong className="leading-10 border-b text-lg">
          4 Service Hardware and Software
        </strong>
      </p>
      <p className="mt-3">
        <em>4.1</em>&nbsp;Hardware is defined as the Processor(s), RAM, hard
        disk(s), motherboard, NIC card and other related hardware included under
        the server lease.
      </p>
      <p className="mt-3">
        <em>4.2</em>&nbsp;Hardware Replacement Guarantees and service levels are
        defined as applying to servers less than 12 months in production and
        apply only to verified server vendors such as Supermicro, Dell, HP and
        IBM. Hardware Replacement Guarantees are only available in certain
        datacenters of which the client will be notified upon reporting a
        hardware specific issue.
      </p>
      <p className="mt-3">
        <em>4.3</em>&nbsp;Hardware Replacement will occur within 12 twelve hours
        of the reported problem in supported datacenters. The client will be
        notified by support in the instance were hardware can-not be replaced
        under this time and is subject to section 4.2.
      </p>
      <p className="mt-3">
        <em>4.4</em>&nbsp;Restoration: Is defined as returning the service to
        its original state before the date the service went offline. If hardware
        failure causes corrupted operating system, data files, or damaged
        service configurations, BlessHost will restore the system to its
        original state if possible however maintains no responsibility of backup
        data or integrity of the restoration. If BlessHost is unable to restore
        any of the configuration a new installation of the service will be
        provided free of charge.
      </p>
      <p className="mt-3">
        <em>4.5</em>&nbsp;BlessHost is not responsible for the restoration of
        data. If hardware failure is experienced and subsequent data loss
        occurs, client is ultimately be responsible for data restoration.
        BlessHost shall not be liable for loss of data under any circumstances.
      </p>
      <p className="mt-3">
        <em>4.6</em>&nbsp;Hardware Upgrade is the cost of the hardware
        peripherals at the time of ordering the server &amp; on subsequent
        upgrades can be different. A one-time setup fee would be applicable in
        certain upgrade requests.
      </p>
      <p className="mt-3">
        <em>4.7</em>&nbsp;BlessHost does not take responsibility for the overall
        security of the service. If any services are compromised in any way,
        BlessHost reserves the right to immediately audit the service and
        server. BlessHost reserves the right to cancel the service if any of the
        services are compromised via the implementation of weak password
        schemes, elderly backend application content and scripting, or via other
        blatant disregard to simple security measures. A fee will be incurred in
        respect to any security related work performed due to any such service
        being compromised by negligence on the part of the client.
      </p>
      <p className="mt-3">
        <em>4.8</em>&nbsp;Service Migration: If a customer wishes to migrate
        from one service to another service, they would have to go through the
        30 (thirty) day notice period for the old service also. The old service
        would have to be cancelled &amp; a new service order would have to be
        placed. Data migration would commence only after both the formalities
        have been completed. There would be no charges for migration of data
        when it has to be done from one service of BlessHost's network to
        another service within the BlessHost's network. Customer charges are
        applicable for data to be moved into BlessHost's network and charges
        would be applicable on a per migration basis.
      </p>
    </div>
  );
}
