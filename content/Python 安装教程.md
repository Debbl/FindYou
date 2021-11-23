---
slug: '/python'
category: "program"
categoryName: "编程"
title: 'Python'
imageSrc: 'http://p3.music.126.net/tBTNafgjNnTL1KlZMt7lVA==/18885211718935735.jpg'
URL: "/python"
description: "Python 编程"
---

# Python <span class="color_h1">环境搭建</span>

## Python下载

Python最新源码，二进制文档，新闻资讯等可以在Python的官网查看到：

Python官网：[https://www.python.org/](https://www.python.org/)

你可以在以下链接中下载 Python 的文档，你可以下载 HTML、PDF 和 PostScript 等格式的文档。

Python文档下载地址：[https://www.python.org/doc/](https://www.python.org/doc/)

* * *

## Python安装

Python已经被移植在许多平台上（经过改动使它能够工作在不同平台上）。

您需要下载适用于您使用平台的二进制代码，然后安装Python。

如果您平台的二进制代码是不可用的，你需要使用C编译器手动编译源代码。

编译的源代码，功能上有更多的选择性， 为python安装提供了更多的灵活性。

以下是各个平台安装包的下载地址：

![](//www.runoob.com/wp-content/uploads/2013/11/DC24DD0C-08A2-4D61-8C6F-4CA1EEB23535.jpg)

以下为不同平台上安装 Python 的方法：

### Unix & Linux 平台安装 Python:

以下为在 Unix & Linux 平台上安装 Python 的简单步骤：

*   打开 WEB 浏览器访问[https://www.python.org/downloads/source/](https://www.python.org/downloads/source/)
*   选择适用 于Unix/Linux 的源码压缩包。
*   下载及解压压缩包。
*   如果你需要自定义一些选项修改_Modules/Setup_*   **执行** ./configure 脚本
*   make
*   make install

执行以上操作后，Python 会安装在 /usr/local/bin 目录中，Python 库安装在 /usr/local/lib/pythonXX，XX 为你使用的 Python 的版本号。

### Window 平台安装 Python:

以下为在 Window 平台上安装 Python 的简单步骤：

*   打开 WEB 浏览器访问[https://www.python.org/downloads/windows/](https://www.python.org/downloads/windows/)

    ![](//www.runoob.com/wp-content/uploads/2013/11/721E917D-CCA5-4F37-8FD6-486315EC8CF8.png)

*   在下载列表中选择Window平台安装包，包格式为：_python-XYZ.msi_ 文件 ， XYZ 为你要安装的版本号。
*   要使用安装程序 _python-XYZ.msi_, Windows 系统必须支持 Microsoft Installer 2.0 搭配使用。只要保存安装文件到本地计算机，然后运行它，看看你的机器支持 MSI。Windows XP 和更高版本已经有 MSI，很多老机器也可以安装 MSI。

![](//www.runoob.com/wp-content/uploads/2013/11/20180711-160607.png)

*   <p>下载后，双击下载包，进入 Python 安装向导，安装非常简单，你只需要使用默认的设置一直点击"下一步"直到安装完成即可。

### MAC 平台安装 Python:

MAC 系统一般都自带有 Python2.x版本 的环境，你也可以在链接 [https://www.python.org/downloads/mac-osx/](https://www.python.org/downloads/mac-osx/) 上下载最新版安装。

* * *

## 环境变量配置

程序和可执行文件可以在许多目录，而这些路径很可能不在操作系统提供可执行文件的搜索路径中。

path(路径)存储在环境变量中，这是由操作系统维护的一个命名的字符串。这些变量包含可用的命令行解释器和其他程序的信息。

Unix或Windows中路径变量为PATH（UNIX区分大小写，Windows不区分大小写）。

在Mac OS中，安装程序过程中改变了python的安装路径。如果你需要在其他目录引用Python，你必须在path中添加Python目录。

### 在 Unix/Linux 设置环境变量

*   **在 csh shell:** 输入<pre>setenv PATH "$PATH:/usr/local/bin/python"</pre> , 按下 <span class="marked">Enter</span>。
*   **在 bash shell (Linux):** 输入<pre>export PATH="$PATH:/usr/local/bin/python" </pre>，按下 <span class="marked">Enter</span>。
*   **在 sh 或者 ksh shell:** 输入<pre>PATH="$PATH:/usr/local/bin/python" </pre>, 按下 <span class="marked">Enter</span>。

**注意: **/usr/local/bin/python 是 Python 的安装目录。

### 在 Windows 设置环境变量

在环境变量中添加Python目录：

**在命令提示框中(cmd) :** 输入
<pre>path=%path%;C:\Python </pre> 

按下 <span class="marked">Enter</span>。

**注意: **C:\Python 是Python的安装目录。

也可以通过以下方式设置：

*   右键点击"计算机"，然后点击"属性"
*   然后点击"高级系统设置"
*   选择"系统变量"窗口下面的"Path",双击即可！
**   然后在"Path"行，添加python安装路径即可(我的D:\Python32)，所以在后面，添加该路径即可。
**ps：记住，路径直接用分号"；"隔开！**
*   最后设置成功以后，在cmd命令行，输入命令"python"，就可以有相关显示。

![](//www.runoob.com/wp-content/uploads/2013/11/201209201707594792.png)

* * *

## Python 环境变量

下面几个重要的环境变量，它应用于Python：

<table class="reference">
<tbody><tr><th >变量名</th><th>描述</th></tr>
<tr><td>PYTHONPATH</td><td> PYTHONPATH是Python搜索路径，默认我们import的模块都会从PYTHONPATH里面寻找。</td></tr>
<tr><td>PYTHONSTARTUP </td><td>Python启动后，先寻找PYTHONSTARTUP环境变量，然后执行此变量指定的文件中的代码。</td></tr>
<tr><td>PYTHONCASEOK  </td><td>加入PYTHONCASEOK的环境变量, 就会使python导入模块的时候不区分大小写.</td></tr>
<tr><td>PYTHONHOME   </td><td>另一种模块搜索路径。它通常内嵌于的PYTHONSTARTUP或PYTHONPATH目录中，使得两个模块库更容易切换。</td></tr>
</tbody></table>
## 添加完变量即安装完成