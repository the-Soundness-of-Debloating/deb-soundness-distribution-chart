import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { Breadcrumb, Layout, Menu, Spin } from "antd";

import { draw as drawBzipArgv } from "./data/bzip/argv-fuzz";
import { draw as drawBzipInput } from "./data/bzip/input-fuzz";
import { draw as drawChownArgv } from "./data/chown/argv-fuzz";
import { draw as drawDateArgv } from "./data/date/argv-fuzz";
import { draw as drawGrepArgv } from "./data/grep/argv-fuzz";
import { draw as drawGrepInput } from "./data/grep/input-fuzz";
import { draw as drawGzipArgv } from "./data/gzip/argv-fuzz";
import { draw as drawGzipInput } from "./data/gzip/input-fuzz";
import { draw as drawMkdirArgv } from "./data/mkdir/argv-fuzz";
import { draw as drawRmArgv } from "./data/rm/argv-fuzz";
import { draw as drawSortArgv } from "./data/sort/argv-fuzz";
import { draw as drawSortInput } from "./data/sort/input-fuzz";
import { draw as drawTarArgv } from "./data/tar/argv-fuzz";
import { draw as drawTarInput } from "./data/tar/input-fuzz";
import { draw as drawUniqArgv } from "./data/uniq/argv-fuzz";
import { draw as drawUniqInput } from "./data/uniq/input-fuzz";

import chartUtil from "./chartUtil";

const { Header, Content, Footer } = Layout;

const programs = {
  "bzip2-1.0.5": { argv: drawBzipArgv, input: drawBzipInput },
  "chown-8.2": { argv: drawChownArgv },
  "date-8.21": { argv: drawDateArgv },
  "grep-2.19": { argv: drawGrepArgv, input: drawGrepInput },
  "gzip-1.2.4": { argv: drawGzipArgv, input: drawGzipInput },
  "mkdir-5.2.1": { argv: drawMkdirArgv },
  "rm-8.4": { argv: drawRmArgv },
  "sort-8.16": { argv: drawSortArgv, input: drawSortInput },
  "tar-1.14": { argv: drawTarArgv, input: drawTarInput },
  "uniq-8.16": { argv: drawUniqArgv, input: drawUniqInput },
};

const menu = Object.keys(programs).map((key) => ({
  key: key,
  label: key,
  children: Object.keys(programs[key]).map((fuzzType) => ({
    key: `${key}/${fuzzType}`,
    label: fuzzType,
  })),
}));

const Index = () => {
  const [prog, setProg] = useState("date-8.21");
  const [fuzzType, setFuzzType] = useState("argv");
  const [chart, setChart] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setChart(chartUtil.initChart());
  }, []);

  useEffect(() => {
    if (chart) {
      programs[prog][fuzzType]?.(chart);
      chart.render();
      setLoading(false);
      return () => {
        chart.destroy();
      };
    }
  }, [chart, prog, fuzzType]);

  return (
    <Layout style={{ backgroundColor: "#fff" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={`${prog}/${fuzzType}`}
          items={menu}
          onSelect={({ key }) => {
            const selectedPath = key.split("/");
            setProg(selectedPath[0]);
            setFuzzType(selectedPath[1]);
            setLoading(true);
          }}
        />
      </Header>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>{prog}</Breadcrumb.Item>
          <Breadcrumb.Item>{fuzzType}</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            minHeight: 280,
            padding: 24,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {loading && <Spin size="large" />}
          <div id="container" />
        </div>
      </Content>
      {/* <Footer
        style={{
          textAlign: "center",
        }}
      >
        Footer Text
      </Footer> */}
    </Layout>
  );
};

const root = createRoot(document.getElementById("app"));
root.render(<Index />);
